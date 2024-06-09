import { IsIn, IsOptional, IsString } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsIn([
    'development on-going',
    'development completed',
    'development discontinued',
    'development on-hold'
  ])
  @IsString()
  status: string;

  @IsString()
  @IsOptional()
  github?: string;

  @IsString()
  @IsOptional()
  video?: string;
}
