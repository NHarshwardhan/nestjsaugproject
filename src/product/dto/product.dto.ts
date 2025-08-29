/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Type } from 'class-transformer';
import { IsInt, IsString, MaxLength, Min, ValidateNested } from 'class-validator';
import { IsEven } from '../is-even.validator';

// class ManufacturerDto {
     
//      @IsString()
//      name: string

//      @IsString()
//      country: string

// }

// export class CreateProductDto{
//     @IsString() 
//     name: string

//     @IsInt()
//     @Min(1)
//     price: number

//     @ValidateNested() //validate nested object
//     @Type(()=>ManufacturerDto) // Transform plain object into ManufacturerDto
//     manufacturer: ManufacturerDto
// }



export class CreateProductDto{
         
    @IsString()
    @MaxLength(100) 
    name: string

    @IsInt()
    @Min(1)
    price: number

    @IsInt()
    @IsEven()
    stock: number
}

