# Usagetracker Service API

## Description
This application is responsible for managing usage-tracker data in konga. This service is called when rating products and merchants.

## Running the application
This application depends on a couple of services to run fully. The command below would build and start all dependent containers and take you into the bash temrinal of the main (`usage-tracker`) container:

$ ./bin/start_docker.sh

## Installation

```bash
$ yarn install
```

## Starting this application
you will need to change the server listening part of the application to use:
```
app.listen(8000, '0.0.0.0')
```
For local development, the database details has to be passed into the .env file.

```
DATABASE_USERNAME=
DATABASE_HOST=
DATABASE_PASSWORD=
DATABASE_NAME=
```
For local development, the database details has to be passed into the kubernetes/master.yaml file.

The application is assuming google cloud is the host and there is config file called `usage-tracker-service-config-ngtd`

to turn off the automatic migration in production, you will need to change the synchronization setting to true in the ormconfig.js file.
```
"synchronize": fasle,
```
For managing your database during development use [Docker Adminer](https://beta.docs.docker.com/samples/library/adminer/). It is a web client editor that helps in managing the database. It is already part of the docker services that has been setup in the application.

### How to Use Adminer
When you run this docker command:

```
docker ps
```
* look for the adminer IP address and port.
* run the IP address in your browser to get access to the adminer dashboard.
* you will need to login to get access to the database.
* you can check for the login details in the .env file or in the docker-compose.yml file

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Technology used
[Fastify] (https://www.fastify.io/docs/)

[NestJS] (https://docs.nestjs.com/)
[TypeORM] (https://typeorm.io/#/)

## Test

### Framework Used
* [Jest] (https://jestjs.io/docs/en/getting-started)

You can run the test by using the following command:

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```


# # endpoints path:
``` 
/accounts -> Body
    {
    "email": "ajoku8@gmail.com",
    "company_name": "testing"
    }

/tracker -> Body
    {
        "email": "ajoku8@gmail.com"
    }

/payment -> query 
    /payment?email=ajoku8@gmail.com

```