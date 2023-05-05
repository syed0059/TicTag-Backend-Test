import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ClaimModule } from './claim/claim.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env", 
    isGlobal:true}), MongooseModule.forRoot(process.env.DB_URI), UserModule, ProductModule, ClaimModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
