import { DynamicModule as DynamicModule } from '@nestjs/common';
import { Module as Module } from '@nestjs/common';
import { WinstonModule as WinstonModule } from 'nest-winston';

import { LoggerService } from './logger.service';
import optionsLoggerDto from './dtos/optionsLogger.dto';

@Module({})
export class LoggerModule {
  static asyncRegister(LoggerOptions: optionsLoggerDto): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        WinstonModule.forRootAsync({
          useFactory: async () => LoggerOptions,
        }),
      ],
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
