import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { Product } from './schema/product.schema';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Roles } from 'src/user/roles.decorator';
import { UserRole } from 'src/user/user.role.enum';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get("/:name")
    async findByName(@Param("name") name: string): Promise<Product> {
        return this.productService.findByName(name);
    }

    @Get("/all")
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Post("/create")
    @Roles(UserRole.STAFF)
    create(@Body() createProductDTO: CreateProductDTO) {
        return this.productService.create(createProductDTO);
    }

    @Put("/edit")
    @Roles(UserRole.STAFF)
    update(@Body() createProductDTO: CreateProductDTO): Promise<Product> {
        return this.productService.edit(createProductDTO);
    }

    @Delete("/delete")
    @Roles(UserRole.STAFF)
    delete(@Body() createProductDTO:CreateProductDTO){
        this.productService.delete(createProductDTO);
    }

    
}
