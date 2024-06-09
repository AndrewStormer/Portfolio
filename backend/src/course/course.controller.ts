import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { Course } from './schemas/course.schema';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    const course = await this.courseService.create(createCourseDto);
    if (!course) {
      throw new BadRequestException(
        "Error: couldn't create new Course request"
      );
    }
    return course;
  }

  @Get()
  async findAll(): Promise<Course[]> {
    const courses = await this.courseService.findAll();

    return courses;
  }
}
