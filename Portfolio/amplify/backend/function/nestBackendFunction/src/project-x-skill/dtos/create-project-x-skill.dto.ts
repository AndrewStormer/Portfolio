import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectXSkillDto {
  @ApiProperty({ name: 'skill_id', type: Number, required: true })
  skill_id: number;

  @ApiProperty({ name: 'project_id', type: Number, required: true })
  project_id: number;
}
