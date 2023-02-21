import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "src/user/model/user.model";
import { UserService } from "src/user/user.service";
import { Game } from "../model/game.model";

@Resolver(Game)
export class GameFieldsResolver {
    constructor( private readonly userService: UserService ) {}

    @ResolveField(() => User, { nullable: true })
    async winner( @Parent() game: Game ) {
        if (!game.winnerId) 
            return null;
        try {
            return (await this.userService.getUserById(game.winnerId));
        }
        catch (e) {
            return null;
        }
    }

    @ResolveField(() => User, { nullable: true })
    async looser( @Parent() game: Game ) {
        if (!game.looserId) 
            return null;
        try {
            return (await this.userService.getUserById(game.looserId));
        }
        catch (e) {
            return null;
        }
    }
}