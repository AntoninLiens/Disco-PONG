import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Users from "src/user/user.entity";
import { UsersService } from "src/user/user.service";
import { Repository } from "typeorm";
import { Friends } from "./friends.entity";

@Injectable()
export class FriendsService {
    constructor(
        @InjectRepository(Friends)
        private readonly friendsRepository: Repository<Friends>,
        private readonly userService: UsersService,
    ) {}
}