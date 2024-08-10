import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { Course } from './course/entitite/course.entity';
import { Project } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';
import { SkillModule } from './skill/skill.module';
import { Skill } from './skill/entities/skill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'readonly',
      password: 'p$A12jp#e@249!',
      database: 'portfolio',
      entities: [Project, Course, Skill],
      synchronize: true
    }),
    ProjectModule,
    CourseModule,
    SkillModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
