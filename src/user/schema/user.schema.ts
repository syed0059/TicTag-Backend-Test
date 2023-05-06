import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../user.role.enum";

@Schema()
export class User {

    @Prop()
    name: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);