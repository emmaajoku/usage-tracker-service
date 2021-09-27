import { RegistrationRepository } from './../registration/registration.repository';
import { PaymentRepository } from './payment.repository';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentDueService {
  constructor(
    private readonly paymentRepository: PaymentRepository,
    private readonly registrationRepository: RegistrationRepository,
  ) {}

/**
 * 
 * @param email 
 * @returns 
 */
 async getPaymentDueForACompany(email: string): Promise<unknown> {
   const companyResult = await this.registrationRepository.getRegisterCompanyByEmail(email);

   if (companyResult && companyResult?.id) {
     const result = await this.paymentRepository.getPaymentDueByCompany(companyResult.id);
     return result;
      } else {
        throw new BadRequestException('Unable to verify your company registration, please check the comapany email try again');
      }
   }

  }