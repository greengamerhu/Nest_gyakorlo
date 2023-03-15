import {  IsNotEmpty, Max, Min } from "class-validator"

export class CreatePreschoolerDto {
    @IsNotEmpty({message : " a Név mező nem lehet üres"})
    name: string 
    @IsNotEmpty({message : " a Kor mező nem lehet üres"})
    @Min(3, {message : "a Kor nem lehet kisebb mint 3"})
    @Max(6, {message : "a Kor nem lehet nagyobb mint 6"})
    age: number 
}
