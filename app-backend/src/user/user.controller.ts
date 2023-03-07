import { Req, Controller, Get, UseGuards } from "@nestjs/common";
import { Request } from "express";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import RequestWithUsers from "src/auth/utils/requestWithUser.interface";
import { UsersService } from "./user.service";

@Controller('Users')
export class UsersController {
    constructor() {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() { Users }: RequestWithUsers) {
        return Users;
    }

    @UseGuards(JwtAuthGuard)
    @Get('leaderbord')
    async leaderboard(@Body() name: string) {
        
    }
}