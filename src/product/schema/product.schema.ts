import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product {

    @Prop()
    name: string;

    @Prop()
    price: number;

    @Prop()
    // in months
    warrantyPeriod: number
}

export const ProductSchema = SchemaFactory.createForClass(Product);