import { Injectable } from '@nestjs/common';

@Injectable()
export class TeapotsService {
  getTeapots() {
    return [
      {
        material: 'material',
        name: 'name',
        author: 'carly',
        pic: 'pic',
        desc: 'desc',
        context: 'context'
      },
      {
        material: 'material',
        name: 'name',
        author: 'carly',
        pic: 'pic',
        desc: 'desc',
        context: 'context'
      },
      {
        material: 'material',
        name: 'name',
        author: 'carly',
        pic: 'pic',
        desc: 'desc',
        context: 'context'
      }
    ]
  }
}
