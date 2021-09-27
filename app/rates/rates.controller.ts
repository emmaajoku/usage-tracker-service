import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatesService } from './rates.service';
@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

 
}
