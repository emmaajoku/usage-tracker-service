import { Module, CacheModule } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { config } from 'app/config/config';
import { RegistrationModule } from './registration/registration.module';
import { PaymentDueModule } from './payment-due/payment-due.module';
import { RatesModule } from './rates/rates.module';
import { UsagetrackerModule } from './usagetracker/usagetracker.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CacheModule.register(
      {
        store: redisStore,
        host: config.redis.host,
        port: config.redis.port,
        database: config.redis.db,
      },
    ),
    RegistrationModule,
    PaymentDueModule,
    RatesModule,
    UsagetrackerModule
  ], controllers: [AppController], 
  providers: [AppService
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
