import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) {}

    async create(user: User): Promise<User> {

        // Hash the user password before saving
        const salTOrRounds = 10;
        const hash = await bcrypt.hash(user.password, salTOrRounds);
        user.password = hash;

        const res = await this.userModel.create(user).catch((err) => {
            // if there are duplicate usernames
            throw new HttpException("Cannot have duplicate usernames", HttpStatus.BAD_REQUEST);
        })
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
