import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export enum Status{
    APPROVED = 1,
    REJECTED = -1,
    PENDING = 0
}

@Schema()
export class Claim {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    customerID: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Product'})
    productID: string;

    @Prop()
    status: Status;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);