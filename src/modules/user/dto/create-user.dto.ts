import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CreateUserDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
   avatar: string;

   @IsString()
   @IsOptional()
   @IsNotEmpty()
   firstName: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty() 
     lastName: string;

     @IsNumber()
     @IsOptional()
     @IsNotEmpty()
     infoId: number;

     @IsString()
     @IsOptional()
     @IsNotEmpty() 
      profession: string;

    @IsString()
    @IsNotEmpty() 
    telegram?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty() 
   instagram?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty() 
  linkedIn?: string;


  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
