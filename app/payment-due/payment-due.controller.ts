import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentDueService } from './payment-due.service';
import { CreatePaymentDueDto } from './dto/create-payment-due.dto';
import { UpdatePaymentDueDto } from './dto/update-payment-due.dto';

@Controller('payment-due')
export class PaymentDueController {
  constructor(private readonly paymentDueService: PaymentDueService) {}


}
