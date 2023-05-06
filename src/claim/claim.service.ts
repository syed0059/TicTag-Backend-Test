import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Claim, Status } from './schema/claim.schema';
import mongoose from 'mongoose';
import { CreateClaimDTO } from './dto/create-claim.dto';
import { ProductService } from 'src/product/product.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ClaimService {
    constructor(
        @InjectModel(Claim.name)
        private claimModel: mongoose.Model<Claim>,
        private productService: ProductService,
        private userService: UserService
    ){}

    async create(claimDTO: CreateClaimDTO): Promise<Claim> {
        const user = await this.userService.findByName(claimDTO.customerUserName);
        const product = await this.productService.findByName(claimDTO.productName);
        if (!user || !product) {
            throw new HttpException("not found", HttpStatus.NOT_FOUND)
        }
        return this.claimModel.create({customerID: user["_id"], productID: product["id"], status: Status.PENDING});
    }

    async getCustomerClaims(username: string): Promise<Claim[]> {
        const user = await this.userService.findByName(username);
        if (!user) {
            throw new HttpException("not found", HttpStatus.NOT_FOUND)
        }
        return this.claimModel.find({customerID: user["_id"]});
    }

    async getAllClaims(): Promise<Claim[]> {
        return this.claimModel.find();
    }

    async approveClaim(createClaimDTO: CreateClaimDTO): Promise<Claim> {
        const user = await this.userService.findByName(createClaimDTO.customerUserName);
        const product = await this.productService.findByName(createClaimDTO.productName);
        if (!user || !product) {
            throw new HttpException("not found", HttpStatus.NOT_FOUND)
        }
        return this.claimModel.findOneAndUpdate({customerID:user["_id"], productID:product["id"]}, {status: Status.APPROVED});
    }
    
    async rejectClaim(createClaimDTO: CreateClaimDTO): Promise<Claim> {
        console.log(createClaimDTO);
        const user = await this.userService.findByName(createClaimDTO.customerUserName);
        const product = await this.productService.findByName(createClaimDTO.productName);
        if (!user || !product) {
            throw new HttpException("not found", HttpStatus.NOT_FOUND)
        }
        return this.claimModel.findOneAndUpdate({customerID:user["_id"], productID:product["id"]}, {status: Status.REJECTED});
    }
}
