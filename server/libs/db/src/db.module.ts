import { Module, Global } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Teapot } from './models/teapot.model';

const models = TypegooseModule.forFeature([Teapot]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/iDailyTea', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
