import { Injectable } from '@nestjs/common';
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
        const user = await this.userService.findByName(claimDTO.customerName);
        const product = await this.productService.findByName(claimDTO.productName);
        return this.claimModel.create({customerID: user["id"], productID: product["id"], status: Status.PENDING});
    }

    async getCustomerClaims(name: string): Promise<Claim[]> {
        const user = await this.userService.findByName(name);
        return this.claimModel.find({customerID: user["id"]});
    }

    async getAllClaims(): Promise<Claim[]> {
        return this.claimModel.find();
    }

    async approveClaim(createClaimDTO: CreateClaimDTO): Promise<Claim> {
        const user = await this.userService.findByName(createClaimDTO.customerName);
        const product = await this.productService.findByName(createClaimDTO.productName);
        return this.claimModel.findOneAndUpdate({customerID:user["id"], productID:product["id"]}, {status: Status.APPROVED});
    }
    
    async rejectClaim(createClaimDTO: CreateClaimDTO): Promise<Claim> {
        const user = await this.userService.findByName(createClaimDTO.customerName);
        const product = await this.productService.findByName(createClaimDTO.productName);
        return this.claimModel.findOneAndUpdate({customerID:user["id"], productID:product["id"]}, {status: Status.REJECTED});
    }
}
