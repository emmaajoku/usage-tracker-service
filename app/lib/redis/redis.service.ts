import { Injectable } from '@nestjs/common';
import { config } from 'app/config/config';
import * as redisClient from 'ioredis';

@Injectable()
export class RedisInit {
    private connection: redisClient.Redis;

    connect() {
        if (!this.connection) {
            const options: object = {
                host: config.redis.host,
                port: config.redis.port,
                db: config.redis.db,
            };
            this.connection = new redisClient(options);
        }
        return this.connection;
    }
}
