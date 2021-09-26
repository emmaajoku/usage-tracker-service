import { RegistrationRepository } from './registration.respository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';

@Module({
     imports: [
      TypeOrmModule.forFeature([RegistrationRepository]),
    ],
  providers: [RegistrationService],
  controllers: [RegistrationController]
})
export class RegistrationModule {}
