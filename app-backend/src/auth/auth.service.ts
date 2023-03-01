import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/model/user.model";
import { UserService } from "src/user/user.service";
import { AuthLoginOutput } from "./dto/authLogin.dto";
import * as bcrypt from 'bcrypt';
import { UserCreateInput, UserCreateOutput } from "src/user/dto/userCreate.dto";

export interface JwtPayload {
    id: string;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser( userName: string, password: string ): Promise<any> {
        const user = await this.userService.getUserByName( userName );
        if ( user && await bcrypt.compare( password, user.password )) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async register(user: UserCreateInput): Promise<UserCreateOutput> {
        return this.userService.userCreate(user);
    }

    async login(user: User): Promise<AuthLoginOutput> {
        const payload: JwtPayload = { id: user.id };
        return { accessToken: this.jwtService.sign(payload) }
    }
}