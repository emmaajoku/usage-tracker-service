import { RegistrationRepository } from '../registration/registration.repository';
import { Module } from '@nestjs/common';
import { UsageTrackerService } from './usagetracker.service';
import { UsageTrackerController } from './usagetracker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsageTrackerRepository } from './usagetracker.repository';
import { PaymentRepository } from 'app/payment-due/payment.repository';
import { RateRepository } from 'app/rates/rates.repositoy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsageTrackerRepository, RegistrationRepository, PaymentRepository, RateRepository]),
  ],
  controllers: [UsageTrackerController],
  providers: [UsageTrackerService]
})
export class UsagetrackerModule {}
