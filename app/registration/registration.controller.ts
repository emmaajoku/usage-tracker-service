import { RegistrationService } from './registration.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('accounts')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) {}


     @Post('')
     async createCompanyAccount(@Body() createRegistrationDto: CreateRegistrationDto): Promise<any> {
       return await this.registrationService.createCompanyAccount(createRegistrationDto);
      }
   
   
}
