import { Test, TestingModule } from '@nestjs/testing';
import { PreschoolerService } from './preschooler.service';

describe('PreschoolerService', () => {
  let service: PreschoolerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreschoolerService],
    }).compile();

    service = module.get<PreschoolerService>(PreschoolerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
