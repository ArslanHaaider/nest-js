import { Body, Controller ,Get, UseGuards } from "@nestjs/common";
import { ApiService } from "./api.service";
import { ApiKeyGuard } from "src/guards/api-key.guard";
 
type requestGetItem = {
    title:string
}

@Controller('nft')
export class ApiController{
    constructor(private readonly apiService:ApiService){}
    @Get("getItem")
    @UseGuards(ApiKeyGuard)
    getItem(@Body() requestData:requestGetItem):object{
        const Item = this.apiService.findItem(requestData)
        return Item
    }
}