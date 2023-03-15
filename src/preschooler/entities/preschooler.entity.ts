import { Min, Max } from "class-validator"
import { Plushie } from "src/plushie/entities/plushie.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Preschooler {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string 
    @Column()
    @Min(3)
    @Max(6)
    age: number 

    @OneToMany(() => Plushie, (plushie) => plushie.preschooler) 
    plushie : Plushie[]


}
