import { Body, Controller, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import RegisterUserDto from "src/auth/dto/register.dto";
import AuthService from "./auth.service";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import RequestWithUser from "./requestWithUser.interface";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async register(@Body() props: RegisterUserDto) {
        return this.authService.register(props);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Req() request: RequestWithUser) {
        const { user } = request;
        const cookie = this.authService.getCookiesWithJwtToken(user.id);
        request.res.setHeader('Set-Cookie', cookie);
        user.password = undefined;
        return request.res.send(user);
    }
}