import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreatePreschoolerDto } from './dto/create-preschooler.dto';
import { UpdatePreschoolerDto } from './dto/update-preschooler.dto';
import { Preschooler } from './entities/preschooler.entity';

@Injectable()
export class PreschoolerService {
  constructor(private dataSource : DataSource) {}

  async create(createPreschoolerDto: CreatePreschoolerDto) {
    const PreschoolerRepo = this.dataSource.getRepository(Preschooler)
    const newPreschooler = new Preschooler()
    newPreschooler.name = createPreschoolerDto.name
    newPreschooler.age = createPreschoolerDto.age
    await PreschoolerRepo.save(newPreschooler)
  }

  async findAll() {
      return await this.dataSource.getRepository(Preschooler).find()

  }

  async findOne(id: number) {
    return await this.dataSource.getRepository(Preschooler).findBy({id: id})

  }

  async update(id: number, updatePreschoolerDto: UpdatePreschoolerDto) {
    const PreschoolerRepo = this.dataSource.getRepository(Preschooler)
    if(!await PreschoolerRepo.findOneBy({id: id})) {
      throw new BadRequestException("Ilyen id-val nem található gyerek")
    }
    const PreschoolerToUpdate = await PreschoolerRepo.findOneBy({id})
    if(updatePreschoolerDto.age == null && updatePreschoolerDto.name == null) {
      throw new BadRequestException("A kéréshez nem társult semilyen adat")
    }
    PreschoolerToUpdate.name = updatePreschoolerDto.name
    PreschoolerToUpdate.age = updatePreschoolerDto.age
    
    return PreschoolerRepo.save(PreschoolerToUpdate)
  }

  async remove(id: number) {
    const PreschoolerRepo = this.dataSource.getRepository(Preschooler)
 
    if(!await PreschoolerRepo.findOneBy({id: id})) {
      throw new BadRequestException("Ilyen id-val nem található plüss")
    }
    PreschoolerRepo.delete(id)
  }
}
