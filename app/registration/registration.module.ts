import { RegistrationRepository } from './registration.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { PaymentRepository } from 'app/payment-due/payment.repository';

@Module({
     imports: [
      TypeOrmModule.forFeature([RegistrationRepository, PaymentRepository]),
    ],
  providers: [RegistrationService],
  controllers: [RegistrationController]
})
export class RegistrationModule {}
