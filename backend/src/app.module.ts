import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModule } from './course/course.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    CourseModule,
    MongooseModule.forRoot(
      'mongodb+srv://abstormer97:fpPXY0TnP3AAAIUd@cluster0.c79rivo.mongodb.net/'
    ),
    ProjectModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
