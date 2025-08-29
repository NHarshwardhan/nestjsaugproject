/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileLoggerService {
    log(message: string){
          // pretend writing to file
          console.log('[FileLogger] ', message)
    }
}
