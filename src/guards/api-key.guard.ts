import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class ApiKeyGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const providedApiKey = request.headers['x-api-key'];

      if (!providedApiKey) {
        throw new HttpException('API Key is missing', HttpStatus.UNAUTHORIZED);
      }

      const validKey = await prisma.xApiKey.findFirst({
        where: {
          Key: providedApiKey
        }
      });

      if (validKey) {
        return true;
      } else {
        throw new HttpException('Invalid API Key', HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      } else {
        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  }
}
