import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient
@Injectable()
export class ApiKeyService {
  async generateApiKey(): Promise<string> {
    const key = crypto.randomBytes(20).toString('hex');
    await prisma.xApiKey.create({
      data:{
        Key:key
      }
    })
    return key
  }
}