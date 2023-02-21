import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./model/user.model";
import { UserMutationsResolver } from "./resolver/user.mutations.resolver";
import { UserQueriesResolver } from "./resolver/user.queries.resolver";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [
        UserService,
        UserMutationsResolver,
        UserQueriesResolver
    ],
    exports: [UserService]
})
export class UserModule {}