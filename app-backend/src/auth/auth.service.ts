import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";
import { HttpException, HttpStatus } from "@nestjs/common";
import RegisterUserDto from "src/user/dto/registerUser.dto";
import LoginUserDto from "src/user/dto/loginUser.dto";

export default class AuthService {
    constructor(private readonly userService: UserService) {}

    async register(props: RegisterUserDto) {
        const hashedPassword = await bcrypt.hash(props.password, 10);
        try {
            const user = await this.userService.createUser({
                ...props,
                password: hashedPassword
            });
            user.password = undefined;
            return user;
        }
        catch (error) {
            if (error.code === PostgresErrorCode.UniqueViolation) {
                throw new HttpException("User already exists", HttpStatus.BAD_REQUEST);
            }
            throw new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async login(props: LoginUserDto) {
        try {
            const user = await this.userService.getUserByName(props.name);
            if (!(await bcrypt.compare(props.password, user.password))) {
                throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException("Something went wrong", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}