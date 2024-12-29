import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectXSkill } from './entitites/project-x-skill.entity';
import { ProjectXSkillController } from './project-x-skill.controller';
import { ProjectXSkillService } from './project-x-skill.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectXSkill])],
  controllers: [ProjectXSkillController],
  providers: [ProjectXSkillService]
})
export class ProjectXSkillModule {}
