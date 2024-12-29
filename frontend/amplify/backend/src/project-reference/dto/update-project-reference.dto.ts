import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateProjectReferenceDto } from './create-project-reference.dto';

export class UpdateProjectReferenceDto extends PartialType(
  CreateProjectReferenceDto
) {
  @ApiPropertyOptional({ name: 'skill_id', type: Number })
  skill_id: number;

  @ApiPropertyOptional({ name: 'text', type: String })
  text: string;

  @ApiPropertyOptional({ name: 'link', type: String })
  link: string;
}
