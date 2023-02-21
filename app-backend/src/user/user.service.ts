import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtPayload } from "src/auth/auth.service";
import { SortDirection } from "src/pagination/pagination.dto";
import { Repository } from "typeorm"
import { UserCreateInput, UserCreateOutput } from "./dto/userCreate.dto";
import { UserDeleteOutput } from "./dto/userDelete.dto";
import { UserPagination, UserPaginationArgs } from "./dto/userPagination.dto";
import { UserUpdateInput, UserUpdateOutput } from "./dto/userUpdate.dto";
import { User } from "./model/user.model";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async userCreate(input: UserCreateInput): Promise<UserCreateOutput> {
        const user = this.userRepository.create(input);
        await user.save();
        return { user };
    }

    async userUpdate(
        userPayload: JwtPayload,
        userId: User['id'], 
        input: UserUpdateInput
    ): Promise<UserUpdateOutput> {
        const user = await this.userRepository.findOneBy({ id: userId });
        user.name = input.name;
        user.password = input.password;
        user.image = input.image;
        user.score = input.score;
        user.coins = input.coins;
        user.level = input.level;
        user.statut = input.statut;
        await user.save();
        return { user };
    }

    async userDelete( userId: User['id'] ): Promise<UserDeleteOutput> {
        const user = await this.userRepository.findOneByOrFail({ id: userId });
        await user.remove();
        return { userId };
    }

    async getUserByName( userName: User['name'] ): Promise<User> {
        const user = await this.userRepository.findOneByOrFail({ name: userName });
        return ( user );
    }

    async getUserById( userId: User['id'] ): Promise<User> {
        const user = await this.userRepository.findOneByOrFail({ id: userId });
        return ( user );
    }

    async userPagination( args: UserPaginationArgs ): Promise<UserPagination> {
        const qb = this.userRepository.createQueryBuilder('user');
        qb.take(args.take);
        qb.skip(args.skip);
        if (args.sortBy != null) {
            if (args.sortBy.createDate !== null)
                qb.orderBy('user.createDate', SortDirection.ASC ? 'ASC' : 'DESC')
            if (args.sortBy.name !== null)
                qb.addOrderBy('user.name', SortDirection.ASC ? 'ASC' : 'DESC')
        }
        const [node, count] = await qb.getManyAndCount();
        return { node, count }
    }
}