import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { JwtPayload } from "src/auth/auth.service";
import { CurrentUser, JwtAuthGuard } from "src/auth/guards/jwtAuthGuard";
import { GameCreateOutput } from "../dto/gameCreate.dto";
import { GameDeleteOutput } from "../dto/gameDelete.dto";
import { GameService } from "../game.service";
import { Game } from "../model/game.model";

@Resolver()
export class GameMutationsResolver {
    constructor( private readonly gameService: GameService ) {}

    @UseGuards(JwtAuthGuard)
    @Mutation(() => GameCreateOutput)
    async gameCreate( @CurrentUser() user: JwtPayload ) {
        return (this.gameService.gameCreate(user));
    }

    @Mutation(() => GameDeleteOutput)
    async gameDelete( @Args({ name: 'gameId', type: () => ID }) gameId: Game['id'] ) {
        return (this.gameService.gameDelete(gameId));
    }
}