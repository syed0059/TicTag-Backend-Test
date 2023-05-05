import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [MongooseModule]
})
export class ProductModule {}