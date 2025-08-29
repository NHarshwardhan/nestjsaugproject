/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MaxLength(100)
  @IsOptional()
  title: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  director: string;

  @IsInt()
  @Min(1990)
  @IsOptional()
  
  year: number;
}



