import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { HttpException, HttpStatus } from "@nestjs/common";
import RegisterDto from "src/auth/dto/register.dto";
import LoginDto from "src/auth/dto/login.dto";
import { JwtService } from "@nestjs/jwt/dist";
import { ConfigService } from "@nestjs/config";
import PostgresErrorCode from "src/database/postgresErrorCodes.enum";

export default class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    public async register(props: RegisterDto) {
        const hashedPassword = await bcrypt.hash(props.password, 10);
        try {
            const user = await this.userService.createUser({
                ...props,
                password: hashedPassword
            });
            user.password = undefined;
            return user;
        }
        catch (error) {
            if (error.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
            }
            throw new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async login(props: LoginDto) {
        try {
            const user = await this.userService.getUserByName(props.name);
            if (!(await bcrypt.compare(props.password, user.password))) {
                throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    getCookiesWithJwtToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
    }

    getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}