import { DynamicModule, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format } from 'winston';
import { AppService } from './app.service';

@Module({})
export class LoggerModule {
  static asyncRegister(LoggerOptions: optionsLoggerDto): DynamicModule {
    return {
      module: LoggerModule,
      imports: [WinstonModule.forRootAsync({ LoggerOptions })],
      providers: [AppService],
      exports: [AppService],
    };
  }
}
