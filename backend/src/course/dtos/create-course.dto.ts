import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

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

export class CreateCourseDto {
  @ApiProperty({
    name: 'department',
    enum: Department,
    required: true,
    default: 'CMP_SC'
  })
  @IsString()
  department: string;

  @ApiProperty({ name: 'number', type: Number, required: true })
  number: number;

  @ApiProperty({ name: 'name', type: String, required: true })
  @IsString()
  name: string;

  @ApiProperty({ name: 'grade', enum: Grade, required: true, default: 'A' })
  @IsString()
  grade: string;

  @ApiProperty({ name: 'link', type: String })
  @IsString()
  @IsOptional()
  link?: string;
}
