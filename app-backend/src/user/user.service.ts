import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateUsersDto from "./dto/createUser.dto";
import Users from "./user.entity";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly userRepository: Repository<Users>,
		private readonly jwtService: JwtService
	) {}

	async createUser(props: CreateUsersDto) {
		const user = await this.userRepository.create(props);
		await this.userRepository.save(user);
		return user;
	}

	async getUserByName(name: string) {
		const user = await this.userRepository.findOneBy({ name });
		return user;
	}
	
	async getUserById(id: number) {
		const user = await this.userRepository.findOneBy({ id });
		return user;
	}
	
	async setJwtRefreshToken(refreshToken: string, id: number) {
		const token = await bcrypt.hash(refreshToken, 10);
		await this.userRepository.update(id, { refreshToken: token });
	}

	async getUserIfRefreshTokenMatch(id: number, refreshToken: string) {
		const user = await this.getUserById(id);
		const isRefreshTokenMatching = await bcrypt.compare(refreshToken, user.refreshToken);
		if (isRefreshTokenMatching)
		return user;
		throw new HttpException("Invalid refresh token", HttpStatus.UNAUTHORIZED);
	}

	// Tests de ctirions

	async leaderboard(): Promise<Users[] | never> {
		return (await this.userRepository.createQueryBuilder('user')
		.select()
		.orderBy('user.id', 'DESC')
		.getMany());
	}
}