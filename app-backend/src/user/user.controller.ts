import { Body, Controller, Get, UseGuards } from "@nestjs/common";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile(@Body() name: string) {
        return this.userService.getUserByName(name);
    }

    @UseGuards(JwtAuthGuard)
    @Get('leaderbord')
    async leaderboard(@Body() name: string) {
        
    }
}