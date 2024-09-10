import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dtos/create-course.dto';
import { UpdateCourseDto } from './dtos/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  async getCourses() {
    const courses = await this.courseService.findAll();

    return courses;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.courseService.create(createCourseDto);
    if (!course) {
      throw new BadRequestException(
        "Error: couldn't create new Course request"
      );
    }
    return course;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto
  ) {
    const course = await this.courseService.update(id, updateCourseDto);
    if (!course) {
      throw new BadRequestException("Error: couldn't update Course request");
    }
    return course;
  }
}
