import { Controller, Get } from "@nestjs/common";
import { ApiKeyService } from "./api-key.service";

@Controller("api-key")
export class ApiKeyController{
    constructor(private readonly apiKeyService:ApiKeyService){}
    @Get('generate')
    generateApiKey():{apiKey:Promise<string>}{
        const apiKey = this.apiKeyService.generateApiKey(); // Change the length as per your requirement
        console.log(apiKey)
        return { apiKey };
    }
} 