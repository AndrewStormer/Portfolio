import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from './course/course.module';
import { Course } from './course/entitite/course.entity';
import { Project } from './project/entities/project.entity';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'readonly',
      password: 'p$A12jp#e@249!',
      database: 'portfolio',
      entities: [Project, Course],
      synchronize: true
    }),
    ProjectModule,
    CourseModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
