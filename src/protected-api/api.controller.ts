import { Body, Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags, ApiBody, ApiResponse } from "@nestjs/swagger";
import { ApiService } from "./api.service";
import { ApiKeyGuard } from "../guards/api-key.guard"; // Assuming guards are in a 'guards' directory
// Define the request body type for Swagger documentation
class requestGetItem {
    title: string;
}
@ApiTags('NFT')
@Controller('nft')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get('getItem')
    @UseGuards(ApiKeyGuard)
    @ApiBody({ type: requestGetItem })
    @ApiResponse({ status: 200, description: 'Returns the requested item' })
    getItem(@Body() requestData: requestGetItem): object {
        const item = this.apiService.findItem(requestData);
        return item;
    }
}
