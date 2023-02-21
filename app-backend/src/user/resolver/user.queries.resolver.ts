import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserPagination, UserPaginationArgs } from "../dto/userPagination.dto";
import { User } from "../model/user.model";
import { UserService } from "../user.service";

@Resolver()
export class UserQueriesResolver {
    constructor( private readonly userService: UserService ) {}

    @Query(() => UserPagination)
    async userPagination( @Args() args: UserPaginationArgs ) {
        return ( this.userService.userPagination(args) )
    }

    @Query(() => User)
    async getUserByName ( @Args({name: "userName", type: () => String}) userName: User['name'] ) {
        return (this.userService.getUserByName(userName))
    }
}