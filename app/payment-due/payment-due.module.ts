import { Module } from '@nestjs/common';
import { PaymentDueService } from './payment-due.service';
import { PaymentDueController } from './payment-due.controller';

@Module({
  controllers: [PaymentDueController],
  providers: [PaymentDueService]
})
export class PaymentDueModule {}
