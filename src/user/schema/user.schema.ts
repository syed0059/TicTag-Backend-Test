import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum userRole {
    CUSTOMER="customer", STAFF="staff"
}

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    password: string;

    @Prop()
    role: userRole;
}

export const UserSchema = SchemaFactory.createForClass(User);