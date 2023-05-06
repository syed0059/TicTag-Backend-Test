import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserRole } from './user.role.enum';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post("/create")
    async create(@Body() createUserDTO: CreateUserDTO): Promise<Object> {
        // Ensuring the userRole is valid
        if (!Object.values(UserRole).includes(createUserDTO.role)) {
            return ["Invalid role"];
        }
        return this.userService.create(createUserDTO);
    }

    // Assuming each user has a unique username
    @Get()
    async userAccountDetails(@Body("username") username: string, @Body("senderName") senderName: string): Promise<Object> {
        // Ensure a user can only request to view their own account
        if (senderName !== username) {
            throw new HttpException('A user can only access their own account details', HttpStatus.FORBIDDEN);
        }
        return this.userService.findByName(username);
    }
}
