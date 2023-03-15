import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePlushieDto } from './dto/create-plushie.dto';
import { UpdatePlushieDto } from './dto/update-plushie.dto';
import { Plushie } from './entities/plushie.entity';

@Injectable()
export class PlushieService {
  constructor(private dataSource : DataSource) {}
  async create(createPlushieDto: CreatePlushieDto) {
    const plushieRepo = this.dataSource.getRepository(Plushie)
    const newplushie = new Plushie()
    newplushie.type = createPlushieDto.type
    newplushie.size = createPlushieDto.size
    await plushieRepo.save(newplushie)
  }

  async findAll() {
    return await this.dataSource.getRepository(Plushie).find()
  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Plushie).findBy({id: id})
  }

  async update(id: number, updatePlushieDto: UpdatePlushieDto) {
    const plushieRepo = this.dataSource.getRepository(Plushie)
    if(!await plushieRepo.findOneBy({id: id})) {
      throw new BadRequestException("Ilyen id-val nem található plüss")
    }
    const plushieToUpdate = await plushieRepo.findOneBy({id})
    if(updatePlushieDto.size == null && updatePlushieDto.type == null) {
      throw new BadRequestException("A kéréshez nem társult semilyen adat")
    }
    plushieToUpdate.type = updatePlushieDto.type
    plushieToUpdate.size = updatePlushieDto.size

    plushieRepo.save(plushieToUpdate)
    
  }

 async remove(id: number) {
    const plushieRepo = this.dataSource.getRepository(Plushie)
 
    if(!await plushieRepo.findOneBy({id: id})) {
      throw new BadRequestException("Ilyen id-val nem található plüss")
    }
    plushieRepo.delete(id)
  }
}
