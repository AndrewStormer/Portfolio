import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSkillDto {
  @ApiPropertyOptional({ name: 'skill', type: String })
  @IsString()
  skill?: string;

  @ApiPropertyOptional({ name: 'confidence', type: Number, required: true })
  confidence?: number;
}
