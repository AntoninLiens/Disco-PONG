import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Users from "src/user/user.entity";
import { Repository } from "typeorm";
import { Game } from "./game.entity";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>
  ) {}

    async createGame(user: Users) {
        const game = await this.gameRepository.create({
            winner: user,
            looser: user
        });
        await this.gameRepository.save(game);
        return game;
    }

    async victories(userId: number): Promise<Game[] | never> {
        return (await this.gameRepository.createQueryBuilder('game')
        .select()
        .where("game.winner = :userId", { userId })
        .getMany());
    }

    async defeats(userId: number): Promise<Game[] | never> {
        return (await this.gameRepository.createQueryBuilder('game')
        .select()
        .where("game.looser = :userId", { userId })
        .getMany());
    }
}