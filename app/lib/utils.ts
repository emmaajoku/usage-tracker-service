import { config } from 'app/config/config';
import { HttpException, HttpStatus } from "@nestjs/common";

export interface Application {
    name: string,
    github: string,
    twitter:  string,
    mobile:  string,
    email:  string,
  }