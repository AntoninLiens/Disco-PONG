import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import AuthModule from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { FriendsModule } from './friends/friends.module';
import GameModule from './game/game.module';
import UsersModule from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UsersModule,
    GameModule,
    FriendsModule
  ]
})
export class AppModule {}
