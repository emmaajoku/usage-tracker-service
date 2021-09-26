import { Controller, Post, Body, Req, Logger } from '@nestjs/common';
import { UsageTrackerService } from './usagetracker.service';
import { CreateUsageTrackerDto } from './dto/createusagetracker.dto';

@Controller('tracker')
export class UsageTrackerController {
  constructor(private readonly usagetrackerService: UsageTrackerService) {}


 /**
  * 
  * @param req 
  * @param createUsageTrackerDto 
  * @returns 
  */
  @Post('')
  async createUsageTracker(@Body() createUsageTrackerDto: CreateUsageTrackerDto): Promise<unknown> {
      const requestBaseUrl = 'sdf'; 
    return await this.usagetrackerService.saveUsageTracker(createUsageTrackerDto);
   }



}




