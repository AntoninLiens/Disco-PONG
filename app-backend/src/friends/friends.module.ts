import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Friends } from "./friends.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Friends])
    ],
})
export class FriendsModule {}