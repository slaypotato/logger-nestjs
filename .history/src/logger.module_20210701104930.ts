import { DynamicModule, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';

import { AppService } from './app.service';
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
      providers: [AppService],
      exports: [AppService],
    };
  }
}
