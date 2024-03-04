import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateInsurerDto {
  @ApiProperty({ description: 'Name of the insurer' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Description of the insurer', required: false })
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Logo URL of the insurer' })
  @IsNotEmpty()
  @IsString()
  logo: string;
}

