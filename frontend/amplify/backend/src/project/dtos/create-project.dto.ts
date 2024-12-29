import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

enum Development {
  ongoing = 'development on-going',
  completed = 'development completed',
  discontinued = 'development discontinued',
  onhold = 'development on-hold'
}

export class CreateProjectDto {
  @ApiProperty({ name: 'name', type: String, required: true })
  @IsString()
  name: string;

  @ApiProperty({ name: 'description', type: String, required: true })
  @IsString()
  description: string;

  @ApiProperty({ name: 'status', enum: Development, required: true })
  @IsString()
  status: string;

  @ApiPropertyOptional({ name: 'github', type: String })
  @IsString()
  @IsOptional()
  github?: string;

  @ApiPropertyOptional({ name: 'video', type: String })
  @IsString()
  @IsOptional()
  video?: string;
}
