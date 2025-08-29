/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { ProductController } from './product/product.controller';
import { OrderController } from './order/order.controller';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { FileLoggerService } from './file-logger/file-logger.service';
import { DYNAMIC_LOGGER_PROVIDER } from './dynamic-logger/dynamic-logger';
import { API_CONFIG } from './common/providers/api-config.provider';
import { FILE_LOGGER_PROVIDER } from './common/providers/file-logger.provider';
import { ProductsModule } from './products/products.module';
import { LoggerModule } from './logger/logger.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
      ProductsModule, 
      LoggerModule,

      // connect to MongoDB
      // MongooseModule.forRoot('mongodb+srv://nishantnestjs:XJyKoJJffnOPa19J@cluster0.sinhd.mongodb.net/nestjsdb?retryWrites=true&w=majority&appName=Cluster0' )
    
      // Dynamic Configuration (Recommended for production)
        ConfigModule.forRoot({isGlobal:true}),
        MongooseModule.forRootAsync({
            imports:[ConfigModule], // load environment variables
            inject:[ConfigService], // provide get() to access .env values
            useFactory:(configService: ConfigService)=>({
                uri: configService.get<string | undefined>('MONGO_URI') //get from .env
            })
        }),
        OrderModule,
        EmployeeModule

     
    
    
    ], // register any other module
  controllers: [AppController, MoviesController, ProductController, OrderController, BooksController], // register controller
  providers: [AppService, BooksService, FileLoggerService,FILE_LOGGER_PROVIDER, DYNAMIC_LOGGER_PROVIDER, API_CONFIG], // register services
})
export class AppModule {
   
    // configure(consumer: MiddlewareConsumer) {
    //     // Apply LoggerMiddleware to all routes under /products
    //     // consumer.apply(LoggerMiddleware).forRoutes('product')

    //     // specific to Route
    //     consumer.apply(LoggerMiddleware).forRoutes(
    //              {path:'product', method: RequestMethod.POST },
    //              {path:'product/:id', method: RequestMethod.GET },
                
    //             )
    // }
  


}

