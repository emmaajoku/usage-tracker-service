import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Application } from './lib/utils';

@Controller()

export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/')
  getHello(): Application {
    return this.appService.getGeneralInfo();
  }
}
