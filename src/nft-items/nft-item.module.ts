import { Module } from "@nestjs/common";
import { ApiService } from "./nft-item.service";
import { ApiController } from "./nft-item.controller";

@Module({
    providers:[ApiService],
    controllers:[ApiController]
})

export class ApiModule{}