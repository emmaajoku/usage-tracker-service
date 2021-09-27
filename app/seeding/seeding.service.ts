import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { Rate } from 'app/rates/entities/rate.entity';
import { RatesSeed } from 'seeds/rates.seed';

@Injectable()
export class SeedingService {
  constructor(
    private readonly entityManager: EntityManager,
  ) {}

  async seed(): Promise<void> {

    await Promise.all([
      this.entityManager.save(Rate, RatesSeed),
    ]);

  }
}