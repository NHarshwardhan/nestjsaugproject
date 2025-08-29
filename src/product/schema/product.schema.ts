/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

/* eslint-disable prettier/prettier */
// _id

export type ProductDocument = Product & Document
 
@Schema()
export class Product{
   
    @Prop({required: true})
    name: string

    @Prop({required: true})
    price: number

    @Prop({default: true})
    inStock: boolean

}

export const ProductSchema = SchemaFactory.createForClass(Product)