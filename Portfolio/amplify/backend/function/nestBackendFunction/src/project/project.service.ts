import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>
  ) {}

  async findAll() {
    return this.projectRepository.find();
  }

  async getProject(id: number) {
    return await this.projectRepository.findOne({
      where: { id }
    });
  }

  async create(project: CreateProjectDto) {
    return await this.projectRepository.save(project);
  }

  async update(id: number, project: UpdateProjectDto) {
    await this.projectRepository.update(id, {
      ...project
    });
    return this.projectRepository.findOne({
      where: { id }
    });
  }
}
