import { Optional } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @Optional()
  @IsNotEmpty()
  login?: string;

  @IsString()
  @Optional()
  @IsNotEmpty()
  password?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  avatar?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  firstName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  lastName?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  profession?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  telegramId?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  instagram?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  linkedIn?: string;
}
