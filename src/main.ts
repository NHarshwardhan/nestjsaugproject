/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging/logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
     new ValidationPipe()
  )
  
  // Apply filter globally
  app.useGlobalFilters(new HttpExceptionFilter())

  //  // Apply interceptor globally
  // app.useGlobalInterceptors(new LoggingInterceptor())

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// bootstrap :- register
