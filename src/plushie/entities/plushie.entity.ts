import { Preschooler } from "src/preschooler/entities/preschooler.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()   
export class Plushie {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    type: string
    @Column()
    size: number 
    @ManyToOne(() => Preschooler, (preschooler) => preschooler.plushie, {'onDelete' : 'SET NULL'})
    preschooler : Preschooler
}
