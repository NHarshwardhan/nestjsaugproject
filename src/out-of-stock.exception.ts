/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus } from "@nestjs/common";

export class OutOfStockException extends HttpException{

       constructor(productId: number){
            super(
                `Product with ID ${productId} is out of stock`,
                HttpStatus.BAD_GATEWAY
            )
       }
}