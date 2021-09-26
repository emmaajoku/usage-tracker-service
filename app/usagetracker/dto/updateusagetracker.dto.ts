import { PartialType } from '@nestjs/swagger';
import { CreateUsageTrackerDto } from './createusagetracker.dto';

export class UpdateUsagetrackerDto extends PartialType(CreateUsageTrackerDto) {}
