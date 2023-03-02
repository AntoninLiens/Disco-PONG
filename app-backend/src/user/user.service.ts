import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateUserDto from "./dto/createUser.dto";
import User from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async createUser(props: CreateUserDto) {
        const user = await this.userRepository.create(props);
        await this.userRepository.save(user);
        return user;
    }

    async getUserByName(name: string) {
        const user = this.userRepository.findOneBy({ name });
        if (user)
            return user;
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }

    async getUserById(id: number) {
        const user = this.userRepository.findOneBy({ id });
        if (user)
            return user;
        throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
}