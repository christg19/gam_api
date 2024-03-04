import { IsString, IsOptional } from 'class-validator';

export class UpdateInsurerDto {
  @IsString()
  @IsOptional()
  name?: string;
  
  @IsString()
  @IsOptional()
  description?:string;
  
  @IsString()
  @IsOptional()
  logo?:string;
}
