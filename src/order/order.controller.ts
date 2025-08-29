/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {

    private orders: any[] = [
       { id: 1, productIds:["1","2"],quantity:5, status: "pending"}
    ]

    @Get()
    findAll():any{
        return this.orders
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() createOrderDto: CreateOrderDto):any{
        
          const order =  this.orders.find(o => o.id === id)
          if(!order) return  {message: 'Order not found'}

          Object.assign(order, createOrderDto)
          return order

    }
}
