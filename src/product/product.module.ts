import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/user/roles.guard';

@Module({
  imports:[MongooseModule.forFeature([{name:Product.name, schema:ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService, {provide:APP_GUARD, useClass: RolesGuard}],
  exports: [MongooseModule]
})
export class ProductModule {}
