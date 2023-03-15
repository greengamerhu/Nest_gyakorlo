import { Min } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()   
export class Plushie {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    type: string
    @Column()
    size: number 
}
