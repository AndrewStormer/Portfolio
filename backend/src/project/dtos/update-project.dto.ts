import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

enum Development {
  ongoing = 'development on-going',
  completed = 'development completed',
  discontinued = 'development discontinued',
  onhold = 'development on-hold'
}

export class UpdateProjectDto {
  @ApiProperty({ name: 'id', type: Number, required: true })
  id: number;

  @ApiPropertyOptional({ name: 'name', type: String })
  @IsString()
  name: string;

  @ApiPropertyOptional({ name: 'description', type: String })
  @IsString()
  description: string;

  @ApiPropertyOptional({ name: 'status', enum: Development })
  @IsString()
  status: string;

  @ApiPropertyOptional({ name: 'github', type: String })
  @IsString()
  @IsOptional()
  github?: string;

  @ApiPropertyOptional({ name: 'github', type: String })
  @IsString()
  @IsOptional()
  video?: string;
}
