import { Test, TestingModule } from '@nestjs/testing';
import { UsageTrackerService } from './usagetracker.service';

describe('UsagetrackerService', () => {
  let service: UsageTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsageTrackerService],
    }).compile();

    service = module.get<UsageTrackerService>(UsageTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
