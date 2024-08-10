import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateSkillDto {
  @ApiProperty({ name: 'id', type: Number, required: true })
  id: number;

  @ApiPropertyOptional({ name: 'skill', type: String })
  @IsString()
  skill?: string;

  @ApiPropertyOptional({ name: 'confidence', type: Number, required: true })
  confidence?: number;
}
