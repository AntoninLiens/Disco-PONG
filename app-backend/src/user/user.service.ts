import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateUsersDto from "./dto/createUser.dto";
import Users from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly UsersRepository: Repository<Users>
    ) {}

    async createUsers(props: CreateUsersDto) {
        const Users = await this.UsersRepository.create(props);
        await this.UsersRepository.save(Users);
        return Users;
    }

    async getUsersByName(name: string) {
        const Users = this.UsersRepository.findOneBy({ name });
        if (Users)
            return Users;
        throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
    }

    async getUsersById(id: number) {
        const Users = this.UsersRepository.findOneBy({ id });
        if (Users)
            return Users;
        throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
    }

    async setJwtRefreshToken(refreshToken: string, id: number) {
        const token = await bcrypt.hash(refreshToken, 10);
        await this.UsersRepository.update(id, { refreshToken: token });
    }

    async getUsersIfRefreshTokenMatch(id: number, refreshToken: string) {
        const Users = await this.getUsersById(id);
        const isRefreshTokenMatching = await bcrypt.compare(refreshToken, Users.refreshToken);
        if (isRefreshTokenMatching)
            return Users;
        throw new HttpException("Invalid refresh token", HttpStatus.UNAUTHORIZED);
    }
}