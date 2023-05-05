import { Body, Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    async findByName(@Body("name") name: string): Promise<Product> {
        return this.productService.findByName(name);
    }

    @Get("/all")
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post("/create")
    create(@Body() createProductDTO: CreateProductDTO) {
        return this.productService.create(createProductDTO);
    }

    @Put("/edit")
    update(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
        return this.productService.edit(createProductDTO);
    }

    @Delete("/delete")
    delete(@Body() createProductDTO:CreateProductDTO){
        this.productService.delete(createProductDTO);
    }

    
}
