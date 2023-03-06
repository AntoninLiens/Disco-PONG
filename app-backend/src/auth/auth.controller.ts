import { Body, Controller, HttpCode, Post, Get, UseGuards, UseInterceptors, ClassSerializerInterceptor } from "@nestjs/common";
import RegisterDto from "src/auth/dto/register.dto";
import Users from "src/user/user.entity";
import { UsersService } from "src/user/user.service";
import AuthService from "./auth.service";
import LoginDto from "./dto/login.dto";
import JwtAuthGuard from "./guards/jwtAuth.guard";
import RefreshAuthGuard from "./guards/refreshAuth.guard";

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly UsersService: UsersService
    ) {}

    @Post('register')
    async register(@Body() props: RegisterDto) {
        return await this.authService.register(props);
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() props: LoginDto) {
        const Users: Users = await this.authService.login(props);
        const accessToken =  await this.authService.getJwtAccessToken(Users);
        const refreshToken = await this.authService.getJwtRefreshToken(Users);

        await this.UsersService.setJwtRefreshToken(refreshToken, Users.id);

        return { accessToken, refreshToken };
    }

    @UseGuards(RefreshAuthGuard)
    @Get('refresh')
    async refresh(@Body() props: Users) {
        return await this.authService.getJwtAccessToken(props);
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout() {
        return await this.authService.getLogOut();
    }
}