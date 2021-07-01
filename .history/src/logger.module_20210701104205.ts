import { DynamicModule, Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { format } from 'winston';
import { AppService } from './app.service';

@Module({})
export class LoggerModule {
  static asyncRegister(LoggerOptions: any): DynamicModule {
    return {
      module: LoggerModule,
      imports: [WinstonModule.forRootAsync({})],
      providers: [AppService],
      exports: [AppService],
    };
  }
}
