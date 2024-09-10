import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectReferenceDto } from './dto/create-project-reference.dto';
import { UpdateProjectReferenceDto } from './dto/update-project-reference.dto';
import { ProjectReference } from './entities/project-reference.entity';

@Injectable()
export class ProjectReferenceService {
  constructor(
    @InjectRepository(ProjectReference)
    private projectReferenceRepository: Repository<ProjectReference>
  ) {}

  async create(createProjectReferenceDto: CreateProjectReferenceDto) {
    return await this.projectReferenceRepository.save(
      createProjectReferenceDto
    );
  }

  async findAll() {
    return await this.projectReferenceRepository.find();
  }

  async update(
    id: number,
    updateProjectReferenceDto: UpdateProjectReferenceDto
  ) {
    await this.projectReferenceRepository.update(id, {
      ...updateProjectReferenceDto
    });
    return this.projectReferenceRepository.findOne({
      where: { id }
    });
  }
}
