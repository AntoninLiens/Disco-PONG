import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { User } from "../model/user.model";

@InputType()
export class UserCreateInput {
    @Field(() => String)
    name: string

    @Field(() => String)
    password: string
    
    @Field(() => String)
    image: string

    @Field()
    score: number

    @Field()
    level: number

    @Field()
    coins: number

    @Field()
    statut: boolean
}

@ObjectType()
export class UserCreateOutput {
    @Field(() => User)
    user: User
}