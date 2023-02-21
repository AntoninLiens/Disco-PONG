import { ArgsType, Field, InputType, ObjectType } from "@nestjs/graphql";
import { Pagination, PaginationArgs } from "src/pagination/pagination.dto";
import { Game } from "../model/game.model";

@ObjectType()
export class GamePagination extends Pagination {
    @Field(() => [Game])
    node: Game[];
}