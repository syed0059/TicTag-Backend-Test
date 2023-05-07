import { ClaimService } from './claim.service';
import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put} from '@nestjs/common';
import { CreateClaimDTO } from './dto/create-claim.dto';
import { Claim } from './schema/claim.schema';
import { Roles } from 'src/user/roles.decorator';
import { UserRole } from 'src/user/user.role.enum';

@Controller('claim')
export class ClaimController {
    constructor(private claimService: ClaimService){}

    @Post("/create")
    @Roles(UserRole.CUSTOMER)
    async create(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.create(createClaimDTO);
    }

    @Get("/:username")
    @Roles(UserRole.CUSTOMER)
    async getCustomerClaims(@Param("username") username: string, @Body("sender") sender : {username: string, role: UserRole}): Promise<Claim[]> {
        if (sender.username !== username) {
            throw new HttpException("User can only access their own claims", HttpStatus.FORBIDDEN);
        }
        return this.claimService.getCustomerClaims(username);
    }

    @Get("/all")
    @Roles(UserRole.STAFF)
    async getAllClaims(@Body("sender") sender: {username: string, role: UserRole}): Promise<Claim[]> {
        return this.claimService.getAllClaims();
    }

    @Put("/approve")
    @Roles(UserRole.STAFF)
    async approveClaim(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.approveClaim(createClaimDTO);
    }

    @Put("reject")
    @Roles(UserRole.STAFF)
    async rejectClaim(@Body() createClaimDTO: CreateClaimDTO): Promise<Claim> {
        return this.claimService.rejectClaim(createClaimDTO);
    }
}
