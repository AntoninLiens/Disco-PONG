import { ObjectType, Field, InputType, ArgsType } from "@nestjs/graphql";
import { Pagination, PaginationArgs, PaginationSortBy, SortDirection } from "src/pagination/pagination.dto";
import { User } from "../model/user.model";

@InputType()
export class UserPaginationSortBy extends PaginationSortBy {
    @Field(() => SortDirection, { nullable: true })
    name?: SortDirection;
}

@ArgsType()
export class UserPaginationArgs extends PaginationArgs {
    @Field(() => UserPaginationSortBy, {nullable: true})
    sortBy?: UserPaginationSortBy
}

@ObjectType()
export class UserPagination extends Pagination {
    @Field(() => [User])
    node: User[];
}