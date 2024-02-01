import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hue')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hue2')
  hue2(): string {
    return 'Hue 2';
  }
}
