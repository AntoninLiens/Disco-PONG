import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
	constructor(
		private readonly UsersService: UsersService,
		private readonly configService: ConfigService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromHeader("accessToken"),
			secretOrKey: configService.get("JWT_SECRET")
		});
	}

	async validate(payload: TokenPayload) {
		return (this.UsersService.getUsersById(payload.id));
	}
}