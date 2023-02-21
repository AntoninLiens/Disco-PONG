import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './model/game.model';
import { Repository } from 'typeorm';
import { GameCreateOutput } from './dto/gameCreate.dto';
import { GameDeleteOutput } from './dto/gameDelete.dto';
import { PaginationArgs, SortDirection } from 'src/pagination/pagination.dto';
import { GamePagination } from './dto/gamePagination.dto';
import { JwtPayload } from 'src/auth/auth.service';
import { User } from 'src/user/model/user.model';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private readonly gameRepository: Repository<Game>,
    ) {}

    async gameCreate( user: JwtPayload ): Promise<GameCreateOutput> {
        const game = this.gameRepository.create();
        game.winner = new User();
        game.winner.id = user.id;
        game.looser = new User();
        game.looser.id = user.id;
        await game.save();
        return { game };
    }

    async gameDelete( gameId: Game['id'] ): Promise<GameDeleteOutput> {
        const game = await this.gameRepository.findOneByOrFail({ id: gameId });
        await game.remove();
        return { gameId };
    }

    async gamePagination( args: PaginationArgs ): Promise<GamePagination> {
        const qb = this.gameRepository.createQueryBuilder('game');
        qb.take(args.take);
        qb.skip(args.skip);
        if (args.sortBy != null) {
            if (args.sortBy.createDate !== null)
                qb.orderBy('game.createDate', SortDirection.ASC ? 'ASC' : 'DESC')
        }
        const [node, count] = await qb.getManyAndCount();
        return { node, count };
    }
}