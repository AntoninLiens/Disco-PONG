import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import RegisterDto from "src/auth/dto/register.dto";
import LoginDto from "src/auth/dto/login.dto";
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config";
import User from "src/user/user.entity";

@Injectable()
export default class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    public async register(props: RegisterDto) {
        const user = await this.userService.getUserByName(props.name);
        if (user)
            throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
        const hashedPassword = await bcrypt.hash(props.password, 10);
        const newUser = await this.userService.createUser({
            ...props,
            password: hashedPassword
        });
        newUser.password = undefined;
        return newUser;
    }

    public async login(props: LoginDto) {
        const user = await this.userService.getUserByName(props.name);
        if (!user) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND);
        }

        if (!await bcrypt.compare(props.password, user.password)) {
            throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
        user.password = undefined;
        return user;
    }

    getCookiesWithJwtToken(user: User) {
        const payload: TokenPayload = { id: user.id, name: user.name };
        return this.jwtService.sign(payload);
    }

    getCookieForLogOut() {
        const payload: TokenPayload = { id: 0, name: "" };
        return this.jwtService.sign(payload);
    }
}