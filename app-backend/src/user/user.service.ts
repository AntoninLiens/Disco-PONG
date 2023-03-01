import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateUserDto from "./dto/registerUser.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User> // (1
    ) {}

    async createUser(props: CreateUserDto) {
        const user = await this.userRepository.create(props);
        await this.userRepository.save(user);
        return user;
    }

    async getUserByName(name: string) {
        return (this.userRepository.findOneBy({ name }));
    }
}