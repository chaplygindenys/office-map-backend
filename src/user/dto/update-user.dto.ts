import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Optional()
  @IsNotEmpty()
  login: string;

  @IsString()
  @Optional()
  @IsNotEmpty()
  password: string;
}
