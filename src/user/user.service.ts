import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';

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

    async findByName(name: string): Promise<Object> {
        const user = await this.userModel.findOne({"name": name});
        return {_id: user.id, name: user.name, role: user.role};
    }

}
