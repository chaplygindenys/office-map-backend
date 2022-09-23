import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ParamDto {
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
