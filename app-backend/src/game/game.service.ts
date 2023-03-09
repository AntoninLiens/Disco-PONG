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
}