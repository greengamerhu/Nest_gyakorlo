import { Min, IsNotEmpty, IsNumber } from "class-validator";
import { Preschooler } from "src/preschooler/entities/preschooler.entity";
import { ManyToOne } from "typeorm";

export class CreatePlushieDto {
    id : number

    @IsNotEmpty({message : "Nem lehet üres"})
    type: string
    @IsNotEmpty()
    @IsNumber()
    @Min(5, {message : "Nem lehet kisebb mint 5"})
    size: number 

   
}
