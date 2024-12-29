import { Body, Controller, Post } from '@nestjs/common';
import { CreateProjectXSkillDto } from './dtos/create-project-x-skill.dto';
import { ProjectXSkillService } from './project-x-skill.service';

@Controller('project-x-skill')
export class ProjectXSkillController {
  constructor(private projectXSkillService: ProjectXSkillService) {}

  @Post()
  async create(@Body() projectXSkill: CreateProjectXSkillDto) {
    return await this.projectXSkillService.create(projectXSkill);
  }
}
