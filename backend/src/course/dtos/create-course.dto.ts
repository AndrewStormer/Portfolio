import { IsIn, IsOptional, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsIn(['CMP_SC', 'MATH', 'INFOTC', 'STAT'])
  department: string;

  number: number;

  @IsString()
  name: string;

  @IsString()
  @IsIn(['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-'])
  @IsOptional()
  grade?: string;

  @IsString()
  @IsOptional()
  link?: string;
}
