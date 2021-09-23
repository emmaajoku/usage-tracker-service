import { config } from 'app/config/config';
import * as Redis from 'ioredis'

const options: object = {
  host: config.redis.host,
  port: config.redis.port,
  db: config.redis.db,
};

export const createClient = (
  redisPort: number = config.redis.port,
  redisUrl: string = config.redis.host,
  db: number =  config.redis.db
) => {
  const client = new Redis(options)
  return client
}
