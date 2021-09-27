import { PaymentRepository } from '../payment-due/payment.repository';
import { RegistrationRepository } from './registration.repository';
import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@Injectable()
export class RegistrationService {
  constructor(
    private registrationRepository: RegistrationRepository,
    private paymentRepository: PaymentRepository
  ) {
    
  }

  async createCompanyAccount(createRegistrationDto: CreateRegistrationDto) {
    const result = await this.registrationRepository.createCompanyAccount(createRegistrationDto)
    const paymentDueData = {
      company: result.id
    }
  
    const paymentInf = await this.paymentRepository.getPaymentDueByCompany(result.id)

    if (paymentInf && paymentInf?.id) {
      await this.paymentRepository.saveCompanyForAccount(paymentInf.id, paymentDueData)
    } else {
    await this.paymentRepository.createCompanyForAccount(paymentDueData)
    }

    return result;
  }

  async getRegisterCompanyById(id: number) {
    return await this.registrationRepository.getRegisterCompanyById(id)
  }

  async getRegisterCompanyByEmail(email: string) {
    return await this.registrationRepository.getRegisterCompanyByEmail(email)
  }

}
