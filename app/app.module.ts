import { Module, CacheModule } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as redisStore from 'cache-manager-redis-store';
import { config } from 'app/config/config';

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
  ], controllers: [AppController], 
  providers: [AppService
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
