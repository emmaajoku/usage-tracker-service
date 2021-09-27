import { RateRepository } from './../rates/rates.repositoy';
import { RegistrationRepository } from '../registration/registration.repository';
import { CreateUsageTrackerDto } from './dto/createusagetracker.dto';
import { UsageTrackerRepository } from './usagetracker.repository';
import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { PaymentRepository } from 'app/payment-due/payment.repository';


@Injectable()
export class UsageTrackerService {
    constructor(
      private readonly usageTrackerRepository: UsageTrackerRepository,
      private readonly registrationRepository: RegistrationRepository,
      private readonly paymentRepository: PaymentRepository,
      private readonly rateRepository: RateRepository
    ) {}

/**
 * 
 * @param createUsageTrackerDto 
 * @param requestBaseUrl 
 * @returns 
 */
  async saveUsageTracker(createUsageTrackerDto: CreateUsageTrackerDto): Promise<unknown> {
    let clickCount: number;
     const companyResult = await this.registrationRepository.getRegisterCompanyByEmail(createUsageTrackerDto.email);

     if (companyResult && companyResult?.id) {
       const usageData  = await this.usageTrackerRepository.getUsagetrackerByCompany(companyResult.id)
        if (usageData && usageData.id) {
          usageData.counter
          const rateData = await this.getRates(usageData.counter);

        const paymentDueData = {
          company: companyResult.id,
          total_requests: usageData.counter,
          total_amount_due: rateData
        }
          const paymentId =  await this.paymentRepository.getPaymentDueByCompany(companyResult.id)
          this.paymentRepository.saveCompanyForAccount(paymentId.id,paymentDueData)
          clickCount = usageData.counter;
        }
        clickCount++;
        const usageUpdateData = {
            counter: clickCount || 0
        }
          const result: unknown = await this.usageTrackerRepository.createUsagetracker(usageData.id, usageUpdateData);
          return result;
        }
     }
    

  /**
   * get rate for a given totatl request count
   * @param totalRequest 
   * @returns 
   */
  async getRates (totalRequest: number) {
    const averageRate =  await this.rateRepository.getRateById(1);
    const mediumRate =  await this.rateRepository.getRateById(2);
    const highRate =  await this.rateRepository.getRateById(3);

      if(totalRequest <= parseInt(averageRate.total_request_to)) { 
        // this value is not greater than average band
        if (totalRequest <= averageRate.average_band) {
          return averageRate.rate;
        } else {
           // the request is greater than average band but no upt to the midium charge, then here we would calculate total amout to charge
          const getAmountPaymentDue: number = Math.floor(averageRate.average_band / totalRequest);
          const rate: number = getAmountPaymentDue * Number(averageRate.rate); 
          return rate
      } 

    } else if (totalRequest <= parseInt(mediumRate.total_request_to)) {
      // the request is greater than average charge, then here we would calculate total amout to charge
      const getAmountPaymentDue: number = Math.floor(mediumRate.average_band / totalRequest);
      const rate: number = getAmountPaymentDue * Number(mediumRate.rate); 
      return rate

    } else if (totalRequest <= parseInt(highRate.total_request_to)) {
      // the request is greater than average charge, then here we would calculate total amout to charge
      const getAmountPaymentDue: number = Math.floor(highRate.average_band / totalRequest);
      const rate: number = getAmountPaymentDue * Number(highRate.rate); 
      return rate
    }

  }


  async getActualyLimitCharge(id: number) {

  }

}