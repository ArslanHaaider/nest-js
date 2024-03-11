import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { ApiKeyService } from "./api-key.service";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
@ApiTags('API Key')
@Controller("api-key")
export class ApiKeyController {
    constructor(
        private readonly apiKeyService: ApiKeyService
    ) {}

    @Get('generate')
    @ApiResponse({ status: 200, description: 'Generates a new API key' })
    async generateApiKey(): Promise<{ apiKey: string }> {
        const apiKey = await this.apiKeyService.generateApiKey();
        console.log(apiKey);
        return { apiKey };
    }

    @Get("getKeys")
    @ApiResponse({ status: 200, description: 'Retrieves all API keys' })
    async getAllKeys(): Promise<any[]> {
        try {
            const allKeys = await prisma.xApiKey.findMany();
            return allKeys;
        } catch (error) {
            // Handle error appropriately, e.g., log it or return a meaningful error response
            console.error("Error fetching API keys:", error);
            throw error; // Rethrow the error for centralized error handling
        }
    }
}
