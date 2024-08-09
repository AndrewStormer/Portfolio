import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course } from './entitite/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
