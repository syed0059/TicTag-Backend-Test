import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User, userRole } from './schema/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post("/create")
    async create(@Body() createUserDTO: CreateUserDTO): Promise<Object> {
        // Ensuring the userRole is valid
        if (!Object.values(userRole).includes(createUserDTO.role)) {
            return ["Invalid role"];
        }
        return this.userService.create(createUserDTO);
    }

    // Assuming each user has a unique name
    @Get()
    async findByName(@Body("name") name: string): Promise<User> {
        return this.userService.findByName(name);
    }
}
