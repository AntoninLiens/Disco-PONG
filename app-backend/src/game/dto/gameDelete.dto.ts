import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Game } from "../model/game.model";

@ObjectType()
export class GameDeleteOutput {
    @Field(() => ID)
    gameId: Game['id'];
}