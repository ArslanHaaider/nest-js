import { Body, Controller, Get, Header, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse, ApiHeader } from "@nestjs/swagger";
import { ApiService } from "./nft-item.service";
import { ApiKeyGuard } from "../guards/api-key.guard";
import { RequestGetItemDto } from "./dto/get-item.dto";

@ApiTags('NFT')
@Controller('nft')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get('getItem')
    @UseGuards(ApiKeyGuard)
    @ApiHeader({
        name: 'x-api-key',
        description: 'API key required for authentication',
    })
    @ApiBody({ type: RequestGetItemDto })
    @ApiResponse({ status: 200, description: 'Returns the requested item' })
    getItem(@Body() requestData: RequestGetItemDto): object {
        const item = this.apiService.findItem(requestData);
        return item;
    }
}

