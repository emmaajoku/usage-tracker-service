import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentDueService } from './payment-due.service';
import { CreatePaymentDueDto } from './dto/create-payment-due.dto';
import { UpdatePaymentDueDto } from './dto/update-payment-due.dto';

@Controller('payment-due')
export class PaymentDueController {
  constructor(private readonly paymentDueService: PaymentDueService) {}

  @Post()
  create(@Body() createPaymentDueDto: CreatePaymentDueDto) {
    return this.paymentDueService.create(createPaymentDueDto);
  }

  @Get()
  findAll() {
    return this.paymentDueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentDueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDueDto: UpdatePaymentDueDto) {
    return this.paymentDueService.update(+id, updatePaymentDueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentDueService.remove(+id);
  }
}
