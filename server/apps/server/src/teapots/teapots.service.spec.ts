import { Test, TestingModule } from '@nestjs/testing';
import { TeapotsService } from './teapots.service';

describe('TeapotsService', () => {
  let service: TeapotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeapotsService],
    }).compile();

    service = module.get<TeapotsService>(TeapotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
