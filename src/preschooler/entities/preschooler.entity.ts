import { Min, Max } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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
}
