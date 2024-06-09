import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @Prop()
  department: string;

  @Prop()
  number: number;

  @Prop()
  name: string;

  @Prop({ required: false })
  grade?: string;

  @Prop({ required: false })
  link?: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
