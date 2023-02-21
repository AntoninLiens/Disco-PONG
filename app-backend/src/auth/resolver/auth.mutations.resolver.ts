import { UseGuards } from "@nestjs/common";
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "../auth.service";
import { AuthLoginOutput } from "../dto/authLogin.dto";
import { LocalAuthGuard } from "../guards/localAuthGuard";

@Resolver()
export class AuthMutationsResolver {
    constructor( private readonly authService: AuthService ) {}

    @UseGuards(LocalAuthGuard)
    @Mutation(() => AuthLoginOutput)
    async authLogin(
        @Context('req') req,
        @Args('username') _username: string,
        @Args('password') _password: string
    ) { return await this.authService.login( req.user ); }
}