import { Test, TestingModule } from '@nestjs/testing';
import { PlushieService } from './plushie.service';

describe('PlushieService', () => {
  let service: PlushieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlushieService],
    }).compile();

    service = module.get<PlushieService>(PlushieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
