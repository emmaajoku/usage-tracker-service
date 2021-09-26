import { RegistrationRepository } from './../registration/registration.respository';
import { Module } from '@nestjs/common';
import { UsageTrackerService } from './usagetracker.service';
import { UsageTrackerController } from './usagetracker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageTrackerRepository } from './usagetracker.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsageTrackerRepository, RegistrationRepository]),
  ],
  controllers: [UsageTrackerController],
  providers: [UsageTrackerService]
})
export class UsagetrackerModule {}
