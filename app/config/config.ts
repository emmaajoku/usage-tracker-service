const appName: string = 'usage-tracker_service';

export const config = {
    appName,
    environment: process.env.NODE_ENV,
    web: {
        port: parseInt(process.env.APP_PORT),
    },
    logging: {
        file: process.env.LOG_PATH,
        level: process.env.LOG_LEVEL,
        console: process.env.LOG_ENABLE_CONSOLE || true,
    },
    mysql: {
        connection: {
            host: process.env.DATABASE_HOST ,
            port: parseInt(process.env.DATABASE_PORT) || 3306,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            debug: process.env.DATABASE_DEBUG || false,
        },
        pool: {
            min: (process.env.DATABASE_POOL_MIN) ? parseInt(process.env.DATABASE_POOL_MIN) : 2,
            max: (process.env.DATABASE_POOL_MAX) ? parseInt(process.env.DATABASE_POOL_MAX) : 2,
        },
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT) || 6379,
        db: parseInt(process.env.REDIS_DB) || 1,
    },
    frontend: {
        host: process.env.FRONTEND_URL,
    },
    database_url: process.env.DATABASE_URL,
    magento: {
        host: process.env.MAGENTO_API_HOST,
        consumerKey: process.env.MAGENTO_API_CONSUMER_KEY,
        consumerSecret: process.env.MAGENTO_API_CONSUMER_SECRET,
        accessToken: process.env.MAGENTO_API_CONSUMER_TOKEN,
        accessTokenSecret: process.env.MAGENTO_API_CONSUMER_TOKEN_SECRET
    },
};
