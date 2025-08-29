/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ArrayMinSize, IsArray, IsInt, IsOptional, IsString, Min, Validate, ValidateIf } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateOrderDto{
      
    //   @IsArray()
    //   @ArrayMinSize(1)
    //   @IsString({each: true}) // Each element must be a string
    //   productIds: string[] //Array of product IDs

    //   @IsInt()
    //   @Min(1)
    //   quantity: number

      @IsString()
      @IsOptional()
      status: string

      @IsString()
      @ValidateIf(o => o.priority !== undefined) // validate only if priority exists
      priority: string
}
