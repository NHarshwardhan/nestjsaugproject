/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { LoggerModule } from 'src/logger/logger.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product/schema/product.schema';

@Module({
  imports:[
    LoggerModule,
    // Product.name -> name of the collection (products by default)
    MongooseModule.forFeature([ {name: Product.name , schema: ProductSchema}])  
  
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
