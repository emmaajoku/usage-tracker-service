import { Module } from '@nestjs/common';
import { RedisInit } from 'app/lib/redis/redis.service';
import { RedisCache } from 'app/lib/redis/redis-cache';

@Module({
  providers: [RedisInit, RedisCache],
  exports: [RedisCache],
})
export class RedisModule {}
