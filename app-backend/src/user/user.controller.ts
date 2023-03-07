import { Req, Controller, Get, UseGuards, HttpException, HttpStatus } from "@nestjs/common";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import RequestWithUsers from "src/auth/utils/requestWithUser.interface";

@Controller('user')
export class UsersController {
    constructor() {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() { user }: RequestWithUsers) {
        if (user)
            return user;
        throw new HttpException("no user", HttpStatus.UNAUTHORIZED);
    }

    // @UseGuards(JwtAuthGuard)
    // @Get('leaderbord')
    // async leaderboard(@Body() name: string) {
        
    // }
}