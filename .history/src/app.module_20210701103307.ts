import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { format } from 'winston';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
