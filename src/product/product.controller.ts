/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, NotFoundException, Param, Post, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { PaginateDTO } from './dto/paginate.dto';
import { IsEvenPipe } from 'src/common/pipes/is-even/is-even.pipe';
import { OutOfStockException } from 'src/out-of-stock.exception';
import { LoggingInterceptor } from 'src/common/interceptors/logging/logging.interceptor';
import { BasicAuthGuard } from 'src/common/guards/basic-auth/basic-auth.guard';

@Controller('product')
//applied to all routes in controller
// @UseInterceptors(LoggingInterceptor)
// @UseGuards(BasicAuthGuard)
export class ProductController {


    private products: any[] = [
        {id: 1, name: "Laptop" , stock: 0},
        {id: 2, name: "Phone" , stock: 2},
        {id: 3, name: "Tablet" , stock: 5},
        {id: 4, name: "Monitor" , stock: 0},
        
    ]


    // @Get()
    // paginate(@Query() query: PaginateDTO): any{
    //      const {page , limit} = query
    //      const start = (page -1) *limit
    //      const end = start + limit
    //      return this.products.slice(start,end)
    // }

    // // @Get()
    // // findAll(): any{
    // //     return this.products
    // // }

    // @Post()
    // create(@Body() createProductDto: CreateProductDto):any{
    //      const product = { id: this.products.length +1,  ...createProductDto}
    //      this.products.push(product)
         
    //      return this.products
    // }



    // -----Custom Pipe---------------

    // @Get('special/:id')
    // getSpecialProduct(@Param('id',IsEvenPipe) id: number){
    //      return {
    //          message: `Special product with even ID ${id} fetched successfully`
    //      }
    // }

    // @Get(':id')
    // getProduct(@Param('id') id: string): any{
    //      const productId = Number(id)
    //      const product = this.products.find(p=>p.id === productId)
    //      if(!product) throw new NotFoundException(`product with ID ${productId} not found`)
    //      return product
    // }


    // -----Custom Exceptiom------

    // @Get('buy/:id')
    // buyProduct(@Param('id') id: string){
    //      const productId = Number(id)
    //      const product = this.products.find(p=>p.id === productId)
        
    //      if(!product) throw new OutOfStockException(productId)
    //      if(product.stock <= 0) throw new OutOfStockException(productId)
        
    //         return {message: `Successfully purchased ${product.name}`}
    // }


    // ----Custom Exception Filter
    //  @Get(':id')
    // getProduct(@Param('id') id: string): any{
    //      const productId = Number(id)
    //      const product = this.products.find(p=>p.id === productId)
    //      if(!product) throw new NotFoundException(`product with ID ${productId} not found`)
    //      return product
    // }

    // ---Middleware
    // @Get(':id')
    // @UseInterceptors(LoggingInterceptor) // applied to this specific route
    // getProduct(@Param('id') id: string): any{
    //      const productId = Number(id)
    //      const product = this.products.find(p=>p.id === productId)
    //      if(!product) throw new NotFoundException(`product with ID ${productId} not found`)
    //      return product
    // }

    //    @Post()
    // create(@Body() createProductDto: any):any{
    //      const product = { id: this.products.length +1,  ...createProductDto}
    //      this.products.push(product)
         
    //      return this.products
    // }


    // --Guard---
    @Post()
    create(@Body() createProductDto: any):any{
         const product = { id: this.products.length +1,  ...createProductDto}
         this.products.push(product)
         
         return this.products
    }

    @Get('/admin/dashboard')
    @UseGuards(BasicAuthGuard) // only this route protected
    getDashboard(){
         return {message: 'Welcome To the admin dashboard !'}
    }



}
