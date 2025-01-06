import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseModule } from "./course/course.module";
import { Course } from "./course/entitites/course.entity";
import { Project } from "./project/entities/project.entity";
import { ProjectModule } from "./project/project.module";
import { SkillModule } from "./skill/skill.module";
import { Skill } from "./skill/entities/skill.entity";
import { ProjectXSkillModule } from "./project-x-skill/project-x-skill.module";
import { ProjectXSkill } from "./project-x-skill/entitites/project-x-skill.entity";
import { ProjectReferenceModule } from "./project-reference/project-reference.module";
import { ProjectReference } from "./project-reference/entities/project-reference.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Project, Course, Skill, ProjectXSkill, ProjectReference],
      synchronize: true,
    }),
    ProjectModule,
    CourseModule,
    SkillModule,
    ProjectXSkillModule,
    ProjectReferenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
