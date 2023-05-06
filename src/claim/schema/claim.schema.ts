import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Status } from "../claimStatus.enum";

@Schema()
export class Claim {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    customerID: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Product'})
    productID: string;

    @Prop()
    purchaseDate: Date

    @Prop()
    claimDate: Date

    @Prop()
    status: Status;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);