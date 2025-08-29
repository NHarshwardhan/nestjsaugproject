/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
     console.log(`[Request] ${req.method} ${req.originalUrl}`)

     console.log(`[Time] ${new Date().toISOString()}`)

     if(['POST', 'PUT'].includes(req.method)){
       console.log(`[Body]`, req.body)
     }

    next(); // pass the control to the next middleware or controller
  }
}
