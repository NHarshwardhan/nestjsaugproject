/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request,Response } from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {

      const ctx =  host.switchToHttp() // Express request/response
      const response = ctx.getResponse<Response>()
      const request = ctx.getRequest<Request>()

      const status = exception instanceof HttpException ? exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR

      const message = exception instanceof HttpException? exception.getResponse(): 'Unexpected error occured'

      // custom response format
      response.status(status).json({
           success: false,
           statusCode: status,
           timeStamp: new Date().toISOString(),
           path: request.url,
           error: message
      })
  }
}
