import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwtRefresh') {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromHeader("refreshToken"),
            secretOrKey: configService.get("JWT_REFRESH_TOKEN_SECRET"),
            passReqCallback: true
        })
    }

    async validate(request: Request, payload: TokenPayload) {
        const refreshToken = request.headers["refreshToken"];
        return (this.userService.getUserIfRefreshTokenMatch(payload.id, refreshToken));
    }
}