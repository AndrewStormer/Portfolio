import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateCourseDto } from './create-course.dto';

enum Department {
  CMP_SC = 'CMP_SC',
  MATH = 'MATH',
  INFOTC = 'INFOTC',
  STAT = 'STAT'
}

enum Grade {
  A = 'A',
  AMinus = 'A-',
  BPlus = 'B+',
  B = 'B',
  BMinus = 'B-',
  CPlus = 'C+',
  C = 'C',
  CMinus = 'C-',
  DPlus = 'D+',
  D = 'D',
  DMinus = 'D-'
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @ApiPropertyOptional({
    name: 'department',
    enum: Department,
    required: true,
    default: 'CMP_SC'
  })
  @IsString()
  @IsOptional()
  department?: string;

  @ApiPropertyOptional({ name: 'number', type: Number })
  @IsOptional()
  number?: number;

  @ApiPropertyOptional({ name: 'name', type: String })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    name: 'grade',
    enum: Grade,
    required: true,
    default: 'A'
  })
  @IsString()
  @IsOptional()
  grade?: string;

  @ApiPropertyOptional({ name: 'link', type: String })
  @IsString()
  @IsOptional()
  link?: string;
}
