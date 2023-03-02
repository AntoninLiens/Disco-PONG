import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import UserModule from "src/user/user.module";
import { AuthController } from "./auth.controller";
import AuthService from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}` }
            })
        })
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],
    controllers: [AuthController],
})
export default class AuthModule {}