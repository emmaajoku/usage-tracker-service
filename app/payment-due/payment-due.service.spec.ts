import { Test, TestingModule } from '@nestjs/testing';
import { PaymentDueService } from './payment-due.service';

describe('PaymentDueService', () => {
  let service: PaymentDueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentDueService],
    }).compile();

    service = module.get<PaymentDueService>(PaymentDueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
