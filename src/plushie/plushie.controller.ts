import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlushieService } from './plushie.service';
import { CreatePlushieDto } from './dto/create-plushie.dto';
import { UpdatePlushieDto } from './dto/update-plushie.dto';

@Controller('plushie')
export class PlushieController {
  constructor(private readonly plushieService: PlushieService) {}

  @Post()
  create(@Body() createPlushieDto: CreatePlushieDto) {
    return this.plushieService.create(createPlushieDto);
  }
  @Post(':plushieid/giveto/:preschoolerid')
  addPlushieToAChild(@Param('plushieid') plushieid : number, @Param('preschoolerid') preschoolerid : number) {
      return this.plushieService.addPlushieToAChild(plushieid, preschoolerid)
  } 

  @Get()
  findAll() {
    return this.plushieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plushieService.findOne(+id);
  }
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlushieDto: UpdatePlushieDto) {
    return this.plushieService.update(+id, updatePlushieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plushieService.remove(+id);
  }
}
