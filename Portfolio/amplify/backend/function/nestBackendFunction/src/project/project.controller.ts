import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  async getProjects() {
    const projects = await this.projectService.findAll();
    if (!projects) {
      throw new BadRequestException("Error: couldn't fetch all projects");
    }
    return projects;
  }

  @Get(':id')
  async getProject(@Param('id') id: number) {
    const project = await this.projectService.getProject(id);
    if (!project) {
      throw new BadRequestException(`Error: couldn't fetch project at ${id}`);
    }
    return project;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createProjectDto: CreateProjectDto) {
    const project = await this.projectService.create(createProjectDto);
    if (!project) {
      throw new BadRequestException(
        "Error: couldn't create new Project request"
      );
    }

    return project;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateProjectDto: UpdateProjectDto
  ) {
    const project = await this.projectService.update(id, updateProjectDto);
    if (!project) {
      throw new BadRequestException("Error: couldn't update Project request");
    }

    return project;
  }
}
