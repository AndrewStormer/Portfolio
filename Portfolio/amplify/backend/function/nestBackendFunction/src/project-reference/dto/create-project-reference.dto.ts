import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectReferenceDto {
  @ApiProperty({ name: 'project_id', type: Number, required: true })
  project_id: number;

  @ApiProperty({ name: 'text', type: String, required: true })
  text: string;

  @ApiProperty({ name: 'link', type: String, required: true })
  link: string;
}
