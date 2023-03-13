import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import Users from "src/user/user.entity";
import { Game } from "./game.entity";
import { GameService } from "./game.service";

@Controller('game')
export class GameController {
    constructor(
        private readonly gameService: GameService
    ) {}

    @Post('create')
    @UseGuards(JwtAuthGuard)
    async createGame(@Req() req: Request) {
        return await this.gameService.createGame(<Users>req.user);
    }

    @Get('victories')
    @UseGuards(JwtAuthGuard)
    async victories(@Req() req: Request, userId: number): Promise<Game[] | never> {
        return this.gameService.victories(userId);
    }

    @Get('defeats')
    @UseGuards(JwtAuthGuard)
    async defeats(@Req() req: Request, userId: number): Promise<Game[] | never> {
        return this.gameService.defeats(userId);
    }
}