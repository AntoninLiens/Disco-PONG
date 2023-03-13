import { Req, Controller, Get, UseGuards } from "@nestjs/common";
import { Request } from "express";
import JwtAuthGuard from "src/auth/guards/jwtAuth.guard";
import Users from "src/user/user.entity";
import { Setting } from "./setting.entity";
import { SettingService } from "./setting.service";

@Controller('setting')
export class SettingController {
    constructor(
        private readonly settingService: SettingService
    ) {}

    @Get('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@Req() req: Request): Promise<Setting> {
        return this.settingService.profile(<Users>req.user);
    }  
}