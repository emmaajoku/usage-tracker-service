import { HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Application } from './lib/utils';
const packjson = require('../../package.json')

@Injectable()
export class AppService {
  private application: Application;
  constructor(
  ) {
    this.application =  {
      name: '',
      github: '',
      twitter: '',
      mobile: '',
      email: '',
    }
  }

  /**
   * @returns {object}
   */
  getGeneralInfo(): Application {
    this.application.name = packjson.author
    this.application.github = packjson.github
    this.application.twitter = packjson.twitter
    this.application.mobile = packjson.mobile
    this.application.email = packjson.email

    const userData: Application = this.application;

    return userData;
  }

}
