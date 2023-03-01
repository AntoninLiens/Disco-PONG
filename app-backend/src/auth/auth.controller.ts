import { Body, Controller, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import RegisterUserDto from "src/user/dto/registerUser.dto";
import AuthService from "./auth.service";
import { LocalAuthGuard } from "./localAuth.guard";
import RequestWithUser from "./requestWithUser.interface";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('Register')
    async register(@Body() props: RegisterUserDto) {
        return this.authService.register(props);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('Login')
    async login(@Req() props: RequestWithUser) {
        const user = props.user;
        user.password = undefined;
        return user;
    }
}