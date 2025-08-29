/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Iproduct } from 'src/iproduct/iproduct.interface';

@Controller('products')
export class ProductsController {
     
    constructor(private productsService: ProductsService){}

    @Post()
    create(@Body() body:Iproduct){
         return this.productsService.create(body)
    }

    @Get()
    findAll(){
          return this.productsService.findAll()
    }


    @Put(':id')
    update(@Param('id') id: string , @Body()updatedData: Iproduct){
        return this.productsService.update(id,updatedData)
    }

    @Delete(':id')
    remove(@Param('id') id: string){
         return this.productsService.remove(id)
    }

    @Get('projected')
    getProjected(){
     console.log('inside projected')
      return this.productsService.findAllProjected()
    }
    
    @Get(':id')
    findOne(@Param('id') id: string){
         return this.productsService.findOne(id)
    }
    
}
