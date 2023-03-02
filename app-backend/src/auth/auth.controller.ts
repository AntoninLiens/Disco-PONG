import { Body, Controller, HttpCode, Post, Get, Req, UseGuards, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import RegisterUserDto from "src/auth/dto/register.dto";
import AuthService from "./auth.service";
import JwtAuthGuard from "./guards/jwtAuth.guard";
import { LocalAuthGuard } from "./guards/localAuth.guard";
import RequestWithUser from "./requestWithUser.interface";

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
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

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout(@Req() request: RequestWithUser) {
        request.res.setHeader('Set-Cookie', this.authService.getCookieForLogOut());
        return request.res.sendStatus(200);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async authenticate(@Req() request: RequestWithUser) {
        const { user } = request;
        user.password = undefined;
        return user;
    }
}