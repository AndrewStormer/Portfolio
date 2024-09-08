import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectXSkillDto } from './dtos/create-project-x-skill.dto';
import { ProjectXSkill } from './entitites/project-x-skill.entity';

@Injectable()
export class ProjectXSkillService {
  constructor(
    @InjectRepository(ProjectXSkill)
    private projectXSkillRepository: Repository<ProjectXSkill>
  ) {}

  async create(projectXSkill: CreateProjectXSkillDto) {
    return await this.projectXSkillRepository.save(projectXSkill);
  }
}
