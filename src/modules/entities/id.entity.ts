import { PrimaryGeneratedColumn } from "typeorm";

export class Id {

    @PrimaryGeneratedColumn({name:'id',type:'int8'})
    id:number;
}

