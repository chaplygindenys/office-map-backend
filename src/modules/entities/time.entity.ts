import { Exclude } from "class-transformer";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";



export class Time{

@Exclude()
@CreateDateColumn({
  transformer: {
    from: (value: Date) => value.getTime(),
    to: (value: Date) => value,
  },
})
createdAt: number;

@Exclude()
@UpdateDateColumn({
  transformer: {
    from: (value: Date) => value.getTime(),
    to: (value: Date) => value,
  },
})
updatedAt: number;
}