import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';
import { Course } from './entitites/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>
  ) {}

  async findAll() {
    return (await this.courseRepository.find()).sort(
      (a, b) => b.priority - a.priority
    );
  }

  async create(course: CreateCourseDto) {
    return this.courseRepository.save(course);
  }

  async update(courseDto: UpdateCourseDto) {
    await this.courseRepository.update(courseDto.id, {
      ...courseDto
    });
    return this.courseRepository.findOne({
      where: { id: courseDto.id }
    });
  }
}
