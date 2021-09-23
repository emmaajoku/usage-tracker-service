import { config } from 'app/config/config';
import { RedisInit } from './redis.service';
import { Injectable } from '@nestjs/common';
import  * as bluebird from 'bluebird';

@Injectable()
export class RedisCache {
    constructor(private readonly redisClient: RedisInit) {
    }

    /**
     * Retrieves the cached value for a given key.
     * @param  {string} key The cache key.
     * @return {object} The cached value, else false.
     */
    async get(key: string): Promise<object> {
        const data = await this.redisClient.connect().get(key);
        return (data) ? JSON.parse(data) : '';
    }

    /**
     * Caches a value under the specified key for the given ttl
     * @param {string} key   The key under which to cache the value
     * @param {object} value The value that needs to be cached
     * @param {integer} ttl  The ttl for the cached value
     */
     set(key: string, value: any, ttl: number) {
        this.redisClient.connect().set(key, JSON.stringify(value), 'ex', ttl);

    }

    delete(key: string) {
        this.redisClient.connect().del(key);
    }


     /**
     * Retrieves the cached value for a given key.
     * @param  {string} key The cache key.
     * @return {object} The cached value, else false.
     */
      async getMultipleKey(key: string): Promise<unknown> {
          const data: string[] = await this.redisClient.connect().keys(key);
          if (data) {
            return data;
          }
    }
}
