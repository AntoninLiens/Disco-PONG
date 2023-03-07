import { UsersService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import RegisterDto from "src/auth/dto/register.dto";
import LoginDto from "src/auth/dto/login.dto";
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config";
import Users from "src/user/user.entity";

@Injectable()
export default class AuthService {
    constructor(
        private readonly UsersService: UsersService,
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService
    ) {}

    async register(props: RegisterDto) {
        const Users = await this.UsersService.getUserByName(props.name);
        if (Users)
            throw new HttpException("Users already exists", HttpStatus.BAD_REQUEST);
        const hashedPassword = await bcrypt.hash(props.password, 10);
        const newUsers = await this.UsersService.createUser({
            ...props,
            password: hashedPassword
        });
        newUsers.password = undefined;
        return newUsers;
    }

    async login(props: LoginDto) {
        const Users = await this.UsersService.getUserByName(props.name);
        if (!Users) {
            throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
        }

        if (!await bcrypt.compare(props.password, Users.password)) {
            throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
        Users.password = undefined;
        return Users;
    }

    getJwtRefreshToken(Users: Users) {
        const payload: TokenPayload = { id: Users.id, name: Users.name };
        return this.jwtService.sign(payload, {
            secret: this.configService.get("JWT_REFRESH_TOKEN_SECRET"),
            expiresIn: this.configService.get("JWT_REFRESH_TOKEN_EXPIRATION_TIME")
        });
    }
    
    getJwtAccessToken(Users: Users) {
        const payload: TokenPayload = { id: Users.id, name: Users.name };
        return this.jwtService.sign(payload);
    }

    getLogOut() {
        const payload: TokenPayload = { id: 0, name: "" };
        return this.jwtService.sign(payload);
    }
}