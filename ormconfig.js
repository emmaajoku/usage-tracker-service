
const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;
const HOST = process.env.DATABASE_HOST;
const DATABASENAME = process.env.DATABASE_NAME;
const DATABASETYPE = process.env.DATABASE_TYPE
const DATABASEPORT = parseInt(process.env.DATABASE_PORT);
const DATABASECONNECTIONTIMEOUT = parseInt(process.env.DATABASE_CONNECTION_TIME_OUT);
const DATABASEACQUIRETIMEOUT = parseInt(process.env.DATABASE_ACQUIRE_TIME_OUT);
const DATABASECONNECTIONLIMIT = parseInt(process.env.DATABASE_CONNECTION_LIMIT);

const EXTERNAL_HOST = process.env.EXTERNAL_DATABASE_HOST;
const EXTERNAL_USER = process.env.EXTERNAL_DATABASE_USERNAME;
const EXTERNAL_PASSWORD = process.env.EXTERNAL_DATABASE_PASSWORD;
const EXTERNAL_DATABASE = process.env.EXTERNAL_DATABASE_NAME;


module.exports = [
  {
    "type": DATABASETYPE,
    "host": HOST,
    "username": USERNAME,
    "password": PASSWORD,
    "database": DATABASENAME,
    "port": DATABASEPORT,
    "synchronize": true,
    "autoLoadEntities": true,
    "useUnifiedTopology": true,
    "useNewUrlParser": true,
    "connectTimeout": DATABASECONNECTIONTIMEOUT,
    "acquireTimeout": DATABASEACQUIRETIMEOUT,
    "extra": {
      "connectionLimit": DATABASECONNECTIONLIMIT,
    },
    "migrations": [
      "dist/migrations/*.js"
    ],
    
    "dropSchema": false,
    "logging": false,
    "entities": [ __dirname + "/dist/**/*.entity.js"],
    "subscribers": [ __dirname + "/dist/**/*.subscriber.js"],
    "cli": {
      "entitiesDir": "app",
      "migrationsDir": "migrations",
      "subscribersDir": "subscriber"
    }
  },
  {
    "name": 'seed',
    "migrations": [
      'src/seeds/*.ts'
    ],
    "cli": {
      "entitiesDir": "app",
      "migrationsDir": 'src/seeds',
    }
  }
]