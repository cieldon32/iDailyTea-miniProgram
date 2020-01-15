import { Test, TestingModule } from '@nestjs/testing';
import { TeapotsController } from './teapots.controller';

describe('Teapots Controller', () => {
  let controller: TeapotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeapotsController],
    }).compile();

    controller = module.get<TeapotsController>(TeapotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
