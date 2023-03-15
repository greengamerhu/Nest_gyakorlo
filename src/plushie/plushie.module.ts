import { Module } from '@nestjs/common';
import { PlushieService } from './plushie.service';
import { PlushieController } from './plushie.controller';

@Module({
  controllers: [PlushieController],
  providers: [PlushieService]
})
export class PlushieModule {}
