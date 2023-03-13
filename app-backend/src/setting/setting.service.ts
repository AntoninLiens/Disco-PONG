import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Users from "src/user/user.entity";
import { Repository } from "typeorm";
import { Setting } from "./setting.entity";


@Injectable()
export class SettingService {
    constructor(
        @InjectRepository(Setting)
        private readonly settingRepository: Repository<Setting>
    ) {}

    async profile(user: Users): Promise<Setting> {
        const setting = await this.settingRepository.createQueryBuilder('setting')
        .select()
        .where("setting.user = :userId", { userId: user.id })
        .getOne();
        if (setting.user.id === user.id)
            return setting;
        return null;
    }
}