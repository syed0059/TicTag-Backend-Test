import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { RolesGuard } from './roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService, {provide: APP_GUARD, useClass:RolesGuard}],
  exports: [MongooseModule]
})
export class UserModule {}
