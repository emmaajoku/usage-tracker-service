import { Injectable } from '@nestjs/common';
import { CreatePaymentDueDto } from './dto/create-payment-due.dto';
import { UpdatePaymentDueDto } from './dto/update-payment-due.dto';

@Injectable()
export class PaymentDueService {
  create(createPaymentDueDto: CreatePaymentDueDto) {
    return 'This action adds a new paymentDue';
  }

  findAll() {
    return `This action returns all paymentDue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentDue`;
  }

  update(id: number, updatePaymentDueDto: UpdatePaymentDueDto) {
    return `This action updates a #${id} paymentDue`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentDue`;
  }
}
