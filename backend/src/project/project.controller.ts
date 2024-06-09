import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CreateProjectDto } from './dtos/create-project.dto';
import { ProjectService } from './project.service';
import { Project } from './schemas/project.schema';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  async findAll(): Promise<Project[]> {
    const projects = await this.projectService.findAll();
    if (!projects) {
      throw new BadRequestException("Error: couldn't fetch all projects");
    }
    return projects;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createProjectDto: CreateProjectDto): Promise<Project> {
    const project = await this.projectService.create(createProjectDto);
    if (!project) {
      throw new BadRequestException(
        "Error: couldn't create new Project request"
      );
    }

    return project;
  }
}
