import { PartialType } from '@nestjs/mapped-types';
import { CreatePreschoolerDto } from './create-preschooler.dto';

export class UpdatePreschoolerDto extends PartialType(CreatePreschoolerDto) {}
