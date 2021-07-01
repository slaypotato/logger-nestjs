import { DynamicModule, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format } from 'winston';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppService],
})
export class LoggerModule {
  static asyncRegister(LoggerOptions: any): DynamicModule {
    return {
      module: LoggerModule,
      providers: [AppService],
      exports: [AppService],
    };
  }
}
