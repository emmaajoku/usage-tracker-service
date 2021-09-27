import { RegistrationRepository } from './../registration/registration.repository';
import { Module } from '@nestjs/common';
import { PaymentDueService } from './payment-due.service';
import { PaymentDueController } from './payment-due.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentRepository } from './payment.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ PaymentRepository, RegistrationRepository]),
  ],
  controllers: [PaymentDueController],
  providers: [PaymentDueService]
})
export class PaymentDueModule {}
