import { Test, TestingModule } from '@nestjs/testing';
import { PreschoolerController } from './preschooler.controller';
import { PreschoolerService } from './preschooler.service';

describe('PreschoolerController', () => {
  let controller: PreschoolerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreschoolerController],
      providers: [PreschoolerService],
    }).compile();

    controller = module.get<PreschoolerController>(PreschoolerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
