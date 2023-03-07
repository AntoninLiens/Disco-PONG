import { Req, Controller, Get, UseGuards, Body } from "@nestjs/common";
import { Request } from "express";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import RequestWithUsers from "src/auth/utils/requestWithUser.interface";
import { UsersService } from "./user.service";

@Controller('user')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() { user }: RequestWithUsers) {
        return user;
    }

    @Get('leaderboard')
    // @UseGuards(JwtAuthGuard)
    async leaderboard() {
        return this.userService.getUserListLeaderboard();
    }
}