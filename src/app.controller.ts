import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('custom/:term')
  getCustom(@Param('term') term: string): string {
    return this.appService.getCustom(term);
  }
}
