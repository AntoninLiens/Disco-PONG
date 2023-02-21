import { Args, Resolver, Query } from "@nestjs/graphql";
import { PaginationArgs } from "src/pagination/pagination.dto";
import { GamePagination } from "../dto/gamePagination.dto";
import { GameService } from "../game.service";
import { Game } from "../model/game.model";

@Resolver()
export class GameQueriesResolver {
    constructor( private readonly gameService: GameService ) {}

    @Query(() => GamePagination)
    async gamePagination( @Args() args: PaginationArgs ) {
        return ( this.gameService.gamePagination(args) )
    }
}