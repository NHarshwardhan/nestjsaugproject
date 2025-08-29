/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Type } from "class-transformer"
import { IsInt, Min } from "class-validator"

export class PaginateDTO{
      
    @Type(()=>Number) // Transform string to number
    @IsInt()
    @Min(1)
    page: number

    @Type(()=>Number) // Transform string to number
    @IsInt()
    @Min(1)
    limit: number

}