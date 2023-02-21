import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { UserCreateInput, UserCreateOutput } from "./userCreate.dto";

@InputType()
export class UserUpdateInput extends UserCreateInput {}

@ObjectType()
export class UserUpdateOutput extends UserCreateOutput {}