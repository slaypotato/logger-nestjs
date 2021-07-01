import inputLoggerDto from '../dtos/inputLogger.dto';
import timestampAdjust from './timestampAdjust';

export default function formatLogMessage(
  data: inputLoggerDto,
  level: string,
): inputLoggerDto {
  return {
    ...data,
    timestamp: timestampAdjust(new Date()),
    level,
    applicationName: this.configService.get('APP_NAME'),
  };
}
