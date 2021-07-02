import { Format as Format } from 'logform';
import * as TransportStream from 'winston-transport';

export default class optionsLoggerDto {
  level: string;
  name: string;
  format: Format;
  transports: TransportStream | TransportStream[];
  exceptionHandlers: TransportStream | TransportStream[];
  rejectionHandlers: TransportStream | TransportStream[];
  exitOnError: boolean;
  silent: boolean;
}
