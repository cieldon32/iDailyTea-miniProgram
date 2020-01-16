import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeapotsModule } from './teapots/teapots.module';
import { NestNextModule } from '../../../libs/next/src/index';

@Module({
  imports: [TeapotsModule, NestNextModule.forRoot({ dev: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
