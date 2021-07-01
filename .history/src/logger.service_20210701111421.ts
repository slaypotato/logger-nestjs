import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
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
