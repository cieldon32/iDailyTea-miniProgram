import { Module } from '@nestjs/common';
import { TeapotsService } from './teapots.service';

@Module({
  providers: [TeapotsService]
})
export class TeapotsModule {}
