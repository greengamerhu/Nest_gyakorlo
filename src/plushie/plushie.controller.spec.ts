import { Test, TestingModule } from '@nestjs/testing';
import { PlushieController } from './plushie.controller';
import { PlushieService } from './plushie.service';

describe('PlushieController', () => {
  let controller: PlushieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlushieController],
      providers: [PlushieService],
    }).compile();

    controller = module.get<PlushieController>(PlushieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
