import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FriendsController } from "./friends.controller";
import { Friends } from "./friends.entity";
import { FriendsService } from "./friends.service";

@Module({
    imports: [TypeOrmModule.forFeature([Friends])],
    providers: [FriendsService],
    controllers: [FriendsController],
})
export class FriendsModule {}