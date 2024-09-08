import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { Course } from './course/entitites/course.entity';
import { Project } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { Skill } from './skill/entities/skill.entity';
import { ProjectXSkillModule } from './project-x-skill/project-x-skill.module';
import { ProjectXSkill } from './project-x-skill/entitites/project-x-skill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'readonly',
      password: 'p$A12jp#e@249!',
      database: 'portfolio',
      entities: [Project, Course, Skill, ProjectXSkill],
      synchronize: true
    }),
    ProjectModule,
    CourseModule,
    SkillModule,
    ProjectXSkillModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
