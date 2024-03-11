import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';

const XApiKeys = ["1f258561a4484b47968681f1b4f6937d5c941a42"];

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const providedApiKey = request.headers['x-api-key'];

    if (providedApiKey && XApiKeys.includes(providedApiKey)) {
      return true;
    } else {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
