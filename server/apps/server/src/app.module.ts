import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeapotsController } from './teapots/teapots.controller';
import { TeapotsModule } from './teapots/teapots.module';

@Module({
  imports: [TeapotsModule],
  controllers: [AppController, TeapotsController],
  providers: [AppService],
})
export class AppModule {}
