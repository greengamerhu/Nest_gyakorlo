import { Module } from '@nestjs/common';
import { PreschoolerService } from './preschooler.service';
import { PreschoolerController } from './preschooler.controller';

@Module({
  controllers: [PreschoolerController],
  providers: [PreschoolerService]
})
export class PreschoolerModule {}
