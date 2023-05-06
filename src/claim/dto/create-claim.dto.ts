import { UserRole } from "src/user/user.role.enum";

export class CreateClaimDTO {
    customerUserName: string;
    productName: string;
    sender: {
        username:string,
        role: UserRole
    }
}