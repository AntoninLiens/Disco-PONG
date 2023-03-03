import { Body, Controller, HttpCode, Post, Get, Req, UseGuards, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import RegisterDto from "src/auth/dto/register.dto";
import User from "src/user/user.entity";
import AuthService from "./auth.service";
import LoginDto from "./dto/login.dto";
import JwtAuthGuard from "./guards/jwtAuth.guard";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import RequestWithUser from "./requestWithUser.interface";

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() props: RegisterDto) {
        const user: User = await this.authService.register(props);
        return await this.authService.getCookiesWithJwtToken(user);
    }

    @Post('login')
    async login(@Body() props: LoginDto) {
        const user: User = await this.authService.login(props);
        return await this.authService.getCookiesWithJwtToken(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout() {
        return await this.authService.getCookieForLogOut();
    }
}