import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';
import { CreatePlushieDto } from './create-plushie.dto';

export class UpdatePlushieDto extends PartialType(CreatePlushieDto) {
}
