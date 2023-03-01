import { Body, Controller, Post } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UserCreateInput } from "src/user/dto/userCreate.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly configService: ConfigService,
        private readonly authService: AuthService        
    ) {}

    @Post('register')
    async register( @Body() user: UserCreateInput ) {
        return this.authService.register(user);
    }
}