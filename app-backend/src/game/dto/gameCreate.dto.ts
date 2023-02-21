import { Field, ObjectType } from "@nestjs/graphql";
import { Game } from "../model/game.model";

@ObjectType()
export class GameCreateOutput {
    @Field(() => Game)
    game: Game
}