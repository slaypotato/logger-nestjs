export default class optionsLoggerDto {
    level: string,
    name: string,
    format: format.combine(
      format.timestamp(),
      format.colorize({ all: true }),
      format.simple(),
    ),
    transports: getTransport(configService),
    exceptionHandlers: getTransport(configService),
    rejectionHandlers: getTransport(configService),
    exitOnError: false,
    silent: configService.get('NODE_ENV') === 'test',
  }
