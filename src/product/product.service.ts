import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schema/product.schema';
import mongoose from 'mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name)
        private productModel: mongoose.Model<Product>){}

    async findByName(name: string): Promise<Product> {
        return this.productModel.findOne({name: name});
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find();
    }

    async create(product: Product): Promise<Product> {
        return this.productModel.create(product);
    }

    async edit(product: Product): Promise<Product> {
        return this.productModel.findOneAndUpdate({"name": product.name}, {"price": product.price}, [{upsert:true}]);
    }

    async delete(product: Product) {
        const res = await this.productModel.findOneAndDelete({"name": product.name, "price": product.price});
        console.log(res)
    }
}
