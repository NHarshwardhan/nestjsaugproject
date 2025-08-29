/* eslint-disable prettier/prettier */
import { FileLoggerService } from "src/file-logger/file-logger.service";

export const FILE_LOGGER_PROVIDER = {
     provide: 'FILE_LOGGER',
     useClass: FileLoggerService
}