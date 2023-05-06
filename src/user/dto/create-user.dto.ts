import { UserRole } from "../user.role.enum";

export class CreateUserDTO {
    name: string;
    username:string;
    email: string;
    password: string;
    role: UserRole;
}