import { Module } from '@nestjs/common';
import { ClaimController } from './claim.controller';
import { ClaimService } from './claim.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Claim, ClaimSchema } from './schema/claim.schema';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/user/roles.guard';

@Module({
  imports:[MongooseModule.forFeature([{name: Claim.name, schema: ClaimSchema}]), ProductModule, UserModule],
  controllers: [ClaimController],
  providers: [ClaimService, ProductService, UserService, {provide:APP_GUARD, useClass:RolesGuard}]
})
export class ClaimModule {}
