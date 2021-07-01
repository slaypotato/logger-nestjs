import { Format } from 'logform';
import { format } from 'winston';

export default class optionsLoggerDto {
    level: string;
    name: string;
    format: Format;
    transports: getTransport(configService),
    exceptionHandlers: getTransport(configService),
    rejectionHandlers: getTransport(configService),
    exitOnError: false,
    silent: configService.get('NODE_ENV') === 'test',
  }
