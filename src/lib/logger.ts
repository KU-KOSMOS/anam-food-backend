import winston, { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'anam-food-backend' },
    transports: [
        new (winston.transports.DailyRotateFile)({
            filename: 'anam-food-backend-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
        new (winston.transports.DailyRotateFile)({
            filename: 'error-anam-food-backend-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        })
    ]
})