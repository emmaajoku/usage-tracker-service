import { PartialType } from '@nestjs/swagger';
import { CreatePaymentDueDto } from './create-payment-due.dto';

export class UpdatePaymentDueDto extends PartialType(CreatePaymentDueDto) {}
