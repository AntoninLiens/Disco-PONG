import { Req, Controller, Get, UseGuards, HttpException, HttpStatus } from "@nestjs/common";
import { Request } from "express";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import Users from "./user.entity";
import { UsersService } from "./user.service";

@Controller('user')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() req: Request): Promise<Users> {
        if (req.user)
            return <Users>req.user;
        throw new HttpException("no user", HttpStatus.UNAUTHORIZED);
    }

    @Get('leaderboard')
    @UseGuards(JwtAuthGuard)
    async leaderboard(@Req () req: Request): Promise<Users[] | never> {
        return this.userService.leaderboard();
    }
}