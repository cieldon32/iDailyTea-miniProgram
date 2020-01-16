import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextResponse } from '../../../libs/next/src/index';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res: NextResponse) {
    return res.nextRender('/index');
  }
}
