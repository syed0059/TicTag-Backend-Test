import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) {}

    async create(user: User): Promise<User> {
        const res = this.userModel.create(user);
        return res;
    }

    async findByName(name: string): Promise<User> {
        return this.userModel.findOne({"name": name});
    }

}
