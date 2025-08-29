/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {

    log(message: string){
         console.log('[ConsoleLogger]', message)
    }
}
