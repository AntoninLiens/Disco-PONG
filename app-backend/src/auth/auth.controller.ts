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
        private readonly userService: UsersService
    ) {}

    @Post('register')
    async register(@Body() props: RegisterDto) {
        const user: Users = await this.authService.register(props);
        const accessToken =  await this.authService.getJwtAccessToken(user);
        const refreshToken = await this.authService.getJwtRefreshToken(user);

        await this.userService.setJwtRefreshToken(refreshToken, user.id);
        
        return { accessToken, refreshToken };
    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() props: LoginDto) {
        const user: Users = await this.authService.login(props);
        const accessToken =  await this.authService.getJwtAccessToken(user);
        const refreshToken = await this.authService.getJwtRefreshToken(user);

        await this.userService.setJwtRefreshToken(refreshToken, user.id);

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