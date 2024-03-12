import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiKeyModule } from './api-key/api-key.module';
import { ApiModule } from './nft-items/nft-item.module';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
@Module({
  imports: [ApiKeyModule,ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}