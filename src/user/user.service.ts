import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
        const res = this.userModel.create(user).catch(() => {
            // catches error if user with same username already exists
            throw new HttpException("cannot have duplicate usernames", HttpStatus.BAD_REQUEST);
        });
        return res;
    }

    async findByName(username: string): Promise<Object> {
        const user = await this.userModel.findOne({"username": username});
        if (!user) {
            throw new HttpException("not found", HttpStatus.NOT_FOUND);
        }
        const {password, ...result} = user;
        return {_id: user.id, name: user.name, username: user.username, email: user.email ,role: user.role};
    }

}
