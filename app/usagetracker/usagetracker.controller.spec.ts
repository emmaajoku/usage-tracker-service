import { Test, TestingModule } from '@nestjs/testing';
import { UsageTrackerController } from './usagetracker.controller';
import { UsageTrackerService } from './usagetracker.service';

describe('UsageTrackerController', () => {
  let controller: UsageTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsageTrackerController],
      providers: [UsageTrackerService],
    }).compile();

    controller = module.get<UsageTrackerController>(UsageTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
