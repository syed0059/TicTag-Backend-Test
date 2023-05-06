import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { UserRole } from "./user.role.enum";
import { ROLES_KEY } from "./roles.decorator";


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<UserRole>(ROLES_KEY, context.getHandler());

        if (!requiredRoles) {
            return true;
        }

        const req = context.switchToHttp().getRequest();
        return requiredRoles.includes(req.body.sender.role);

    }
}