import { Test, TestingModule } from '@nestjs/testing';
import { PaymentDueController } from './payment-due.controller';
import { PaymentDueService } from './payment-due.service';

describe('PaymentDueController', () => {
  let controller: PaymentDueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentDueController],
      providers: [PaymentDueService],
    }).compile();

    controller = module.get<PaymentDueController>(PaymentDueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
