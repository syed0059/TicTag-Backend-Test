import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../user.role.enum";
import mongoose from "mongoose";

@Schema()
export class User {

    @Prop()
    name: string;

    // Ensures usernames are unique
    @Prop({type: mongoose.Schema.Types.String, unique:true})
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);