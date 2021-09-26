import { RegistrationRepository } from './registration.respository';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    private repository: RegistrationRepository
  ) {
    
  }

  async createCompanyAccount(createRegistrationDto: CreateRegistrationDto) {
    return await this.repository.createCompanyAccount(createRegistrationDto)
  }

  async getRegisterCompanyById(id: number) {
    return await this.repository.getRegisterCompanyById(id)
  }

  async getRegisterCompanyByEmail(email: string) {
    return await this.repository.getRegisterCompanyByEmail(email)
  }

}
