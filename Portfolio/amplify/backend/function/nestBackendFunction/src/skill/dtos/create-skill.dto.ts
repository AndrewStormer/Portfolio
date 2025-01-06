import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty({ name: 'skill', type: String, required: true })
  @IsString()
  skill: string;

  @ApiProperty({ name: 'confidence', type: Number, required: true })
  confidence: number;
}
