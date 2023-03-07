import { Req, Controller, Get, UseGuards, HttpException, HttpStatus } from "@nestjs/common";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import RequestWithUsers from "src/auth/utils/requestWithUser.interface";

@Controller('user')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() { user }: RequestWithUsers) {
        if (user)
            return user;
        throw new HttpException("no user", HttpStatus.UNAUTHORIZED);
    }

    @Get('leaderboard')
    // @UseGuards(JwtAuthGuard)
    async leaderboard() {
        return this.userService.getUserListLeaderboard();
    }
}