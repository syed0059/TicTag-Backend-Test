import { UserRole } from "src/user/user.role.enum";

export class CreateProductDTO {
    name: string;
    price: number;
    warrantyPeriod: number;
    sender: {
        username:string,
        role: UserRole
    };
}