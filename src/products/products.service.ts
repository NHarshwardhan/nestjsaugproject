/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iproduct } from 'src/iproduct/iproduct.interface';
import { Product, ProductDocument } from 'src/product/schema/product.schema';

@Injectable()
export class ProductsService {
   
     constructor(
         @InjectModel(Product.name) private productModel: Model<ProductDocument>   
     ){}
    

     //create New Product
    async create(createProductDto:{name: string, price: number, inStock?:boolean}): Promise<ProductDocument>{
       const createdProduct = new this.productModel(createProductDto)
       return createdProduct.save()             

     }
    // Get all products
    async findAll(): Promise<ProductDocument[]>{
        return this.productModel.find().exec()
    }

    // Get one product by id
    async findOne(id: string):Promise<ProductDocument>{
      const product =   await this.productModel.findById(id).exec()
        if(!product){
                throw new NotFoundException(`Product with id ${id} not found`)
            }
        return product
    
    }

    async update(id: string, updateData:Iproduct):Promise<ProductDocument>{
      const updateProduct =   await this.productModel.findByIdAndUpdate(id, updateData)
      if(!updateProduct){
        throw new NotFoundException(`Product with id ${id} not found`)
      }
      return updateProduct

    }

     async remove(id: string) :Promise<ProductDocument>{
      const deletedProduct =   await this.productModel.findByIdAndDelete(id).exec()
      if(!deletedProduct){
        throw new NotFoundException(`Product with id ${id} not found`)
      }
      return deletedProduct

    }


    // Fetch All Products with Projection
    //- return name and price (not _id, or inStock)
    async findAllProjected(){
        //  1- include field , 0-exclude field
        // {} -> means all documents
        //  return this.productModel.find({},{name: 1, price: 1, _id:0}).exec()

        // return this.productModel.find().sort({price:-1}).exec()

        return this.productModel.find({},{name: 1, price: 1, _id:0}).sort({price:-1}).exec()
    }


}
