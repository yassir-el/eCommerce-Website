import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/hello/:name")
  getHelloByName(req): string {
    console.log(req);
    return this.appService.getHelloByName("");
  }
}
