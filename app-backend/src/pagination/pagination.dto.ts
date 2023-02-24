import { ArgsType, Field, InputType, Int, InterfaceType, registerEnumType } from "@nestjs/graphql";
import { Node } from "./models/node.model";

export enum SortDirection {
    ASC,
    DESC
}

registerEnumType(SortDirection, {
    name: 'SortDirection'
});


@InputType()
export class PaginationSortBy {
    @Field(() => SortDirection, { nullable: true })
    createDate?: SortDirection;
}

@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { nullable: true })
    skip: number;

    @Field(() => Int, { nullable: true })
    take: number;

    @Field(() => PaginationSortBy, { nullable: true })
    sortBy?: PaginationSortBy
}

@InterfaceType()
export abstract class Pagination<N extends Node = Node> {
    @Field()
    count: number;

    @Field(() => [Node])
    abstract node: N[]
}