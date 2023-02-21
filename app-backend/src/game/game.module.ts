import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { GameService } from "./game.service";
import { Game } from "./model/game.model";
import { GameFieldsResolver } from "./resolver/game.fields.resolver";
import { GameMutationsResolver } from "./resolver/game.mutations.resolver";
import { GameQueriesResolver } from "./resolver/game.queries.resolver";

@Module({
    imports: [
        TypeOrmModule.forFeature([Game]),
        UserModule
    ],
    providers: [
        GameService,
        GameMutationsResolver,
        GameQueriesResolver,
        GameFieldsResolver
    ],
    exports: [GameService]
})
export class GameModule {}