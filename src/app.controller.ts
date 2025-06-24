import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
   
  ) {}

  // localhost:3000/
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 }
