import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';


@Module({
  controllers: [],
  providers: [RatesService]
})
export class RatesModule {}
