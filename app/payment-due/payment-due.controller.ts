import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaymentDueService } from './payment-due.service';
import { CreatePaymentDueDto } from './dto/create-payment-due.dto';
import { UpdatePaymentDueDto } from './dto/update-payment-due.dto';
import { PayementDataQuery } from 'app/lib/utils';

@Controller('payment')
export class PaymentDueController {
  constructor(private readonly paymentDueService: PaymentDueService) {}

  /**
   * 
   * @param email 
   * @returns 
   */
   @Get('')
   async getPaymentDueByCompany(@Query() params: PayementDataQuery) {
      return await this.paymentDueService.getPaymentDueForACompany(params.email);
   }
 
 

}
