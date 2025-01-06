import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateProjectDto } from './create-project.dto';

enum Development {
  ongoing = 'development on-going',
  completed = 'development completed',
  discontinued = 'development discontinued',
  onhold = 'development on-hold'
}

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiPropertyOptional({ name: 'name', type: String, required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ name: 'description', type: String, required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ name: 'status', enum: Development, required: false })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiPropertyOptional({ name: 'github', type: String })
  @IsString()
  @IsOptional()
  github?: string;

  @ApiPropertyOptional({ name: 'video', type: String })
  @IsString()
  @IsOptional()
  video?: string;
}
