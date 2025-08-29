/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
     
     const req: Request = context.switchToHttp().getRequest()
     const method = req.method
     const url  = req.originalUrl
     const now = Date.now()

     console.log(`[Request] ${method} ${url} started at ${new Date().toISOString()}`)

     return next.handle().pipe(
          map(data=> {
              return {
                      success: true,
                      timestamp: new Date().toISOString(),
                      path: url,
                      data

              }
          }),
          tap(()=> console.log(`[Request] ${method} ${url} completed in ${Date.now()- now}ms`))
     )


    return next.handle();
  }
}
