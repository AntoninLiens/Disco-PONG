import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import CreateUsersDto from "./dto/createUser.dto";
import Users from "./user.entity";
import * as bcrypt from "bcrypt";
import { Client } from "pg";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly userRepository: Repository<Users>
	) {}

	async createUser(props: CreateUsersDto) {
		const user = await this.userRepository.create(props);
		await this.userRepository.save(user);
		return user;
	}

	async getUserByName(name: string) {
		const user = this.userRepository.findOneBy({ name });
		if (user)
			return user;
		throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
	}

	async getUserById(id: number) {
		const user = this.userRepository.findOneBy({ id });
		if (user)
			return user;
		throw new HttpException("Users not found", HttpStatus.NOT_FOUND);
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

	defaultUser: Users = {
		id: 0,
		refreshToken: "",
		name: "undefined",
		password: "",
		pfp: "",
		score: 0,
		level: 0,
		xp: 0,
		coins: 0,
		victories: [],
		defeats: []
	}

	async getUserListLeaderboard() {

		const queryBuilder = this.userRepository.createQueryBuilder("user")
		.select("user.score")
		.orderBy("user.score", "DESC")
		.limit(10);

		const result = await queryBuilder.execute();

		console.log(result);

		const userList: Users[] = [
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser,
			this.defaultUser
		];

		return userList;
	}
}