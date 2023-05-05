import { ClaimService } from './claim.service';
import { Body, Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { CreateClaimDTO } from './dto/create-claim.dto';
import { Claim } from './schema/claim.schema';

@Controller('claim')
export class ClaimController {
    constructor(private claimService: ClaimService){}

    @Post("/create")
    async create(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.create(createClaimDTO);
    }

    @Get()
    async getCustomerClaims(@Body("customerName") name: string): Promise<Claim[]> {
        return this.claimService.getCustomerClaims(name);
    }

    @Get("/all")
    async getAllClaims(): Promise<Claim[]> {
        return this.claimService.getAllClaims();
    }

    @Put("/approve")
    async approveClaim(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.approveClaim(createClaimDTO);
    }

    @Put("reject")
    async rejectClaim(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.rejectClaim(createClaimDTO);
    }
}
