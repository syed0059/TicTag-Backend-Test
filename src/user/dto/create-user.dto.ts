import { userRole } from "../schema/user.schema";

export class CreateUserDTO {
    name: string;
    password: string;
    role: userRole;
}