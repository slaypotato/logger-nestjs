import { Injectable, Logger } from '@nestjs/common';
import inputLoggerDto from './dtos/inputLogger.dto';

@Injectable()
export class LoggerService extends Logger {
  fatal(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'fatal'));
  }

  error(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'error'));
  }

  warn(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'warn'));
  }

  info(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'info'));
  }

  trace(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'trace'));
  }

  silent(data: inputLoggerDto): void {
    this.logMessage(this.formatLogMessage(data, 'silent'));
  }

  private logMessage(data: inputLoggerDto): void {
    Object.keys(data).map(function (key) {
      (typeof data[key] === 'string' && data[key].length) > 25000
        ? data[key].substring(0, 25000)
        : data[key];
      return data[key] ? data[key] : (data[key] = 'not available');
    });
    this.log(data, data.context);
  }

  addContext(context: string): void {
    this.setContext(context);
  }

  close(): void {
    this.close();
  }
}
