import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ProjectReferenceService } from './project-reference.service';
import { CreateProjectReferenceDto } from './dto/create-project-reference.dto';
import { UpdateProjectReferenceDto } from './dto/update-project-reference.dto';

@Controller('project-reference')
export class ProjectReferenceController {
  constructor(
    private readonly projectReferenceService: ProjectReferenceService
  ) {}

  @Post()
  create(@Body() createProjectReferenceDto: CreateProjectReferenceDto) {
    return this.projectReferenceService.create(createProjectReferenceDto);
  }

  @Get()
  findAll() {
    return this.projectReferenceService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectReferenceDto: UpdateProjectReferenceDto
  ) {
    return this.projectReferenceService.update(+id, updateProjectReferenceDto);
  }
}
