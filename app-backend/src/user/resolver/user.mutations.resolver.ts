import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Resolver } from "@nestjs/graphql";
import { JwtPayload } from "src/auth/auth.service";
import { CurrentUser, JwtAuthGuard } from "src/auth/guards/jwtAuthGuard";
import { UserCreateInput, UserCreateOutput } from "../dto/userCreate.dto";
import { UserDeleteOutput } from "../dto/userDelete.dto";
import { UserUpdateInput, UserUpdateOutput } from "../dto/userUpdate.dto";
import { User } from "../model/user.model";
import { UserService } from "../user.service";

@Resolver(User)
export class UserMutationsResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => UserCreateOutput)
    async userCreate (@Args('input') input: UserCreateInput) {
        return (this.userService.userCreate(input));
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => UserUpdateOutput)
    async userUpdate (
        @CurrentUser() userPayload: JwtPayload,
        @Args({ name: 'userId', type: () => ID }) userId: User['id'],
        @Args('input') input: UserUpdateInput
    ){
        return (this.userService.userUpdate(userPayload, userId, input));
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => UserDeleteOutput)
    async userDelete( @Args({ name: 'userId', type: () => ID }) userId: User['id'] ){
        return (this.userService.userDelete(userId));
    }
}