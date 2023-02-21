import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/model/user.model";
import { UserService } from "src/user/user.service";
import { AuthLoginOutput } from "./dto/authLogin.dto";

export interface JwtPayload {
    id: string;
    name: string;
    score: number;
    level: number;
    coins: number;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser( userName: string, password: string ): Promise<any> {
        const user = await this.userService.getUserByName( userName );
        if ( user && user.password === password ) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User): Promise<AuthLoginOutput> {
        const payload: JwtPayload = {
            id: user.id,
            name: user.name,
            score: user.score,
            level: user.level,
            coins: user.coins
        };
        return { accessToken: this.jwtService.sign(payload) }
    }
}