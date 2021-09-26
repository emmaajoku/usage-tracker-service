import { RegistrationRepository } from './../registration/registration.respository';
import { CreateUsageTrackerDto } from './dto/createusagetracker.dto';
import { UsageTrackerRepository } from './usagetracker.repository';
import { Injectable, BadRequestException, Logger } from '@nestjs/common';


@Injectable()
export class UsageTrackerService {
    constructor(
      private readonly usageTrackerRepository: UsageTrackerRepository,
      private readonly registrationRepository: RegistrationRepository
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
        // Logger.debug(JSON.stringify(companyResult.id));
        if (usageData && usageData.id) {
          clickCount = usageData.counter;
        }
        clickCount++;
        const usageUpdateData = {
            counter: clickCount || 0
        }
        const result: unknown = await this.usageTrackerRepository.createUsagetracker(usageData.id, usageUpdateData)
        return result;
     } else {
         throw new BadRequestException('Please check the comapany id and email try again')
     }
  }


}

