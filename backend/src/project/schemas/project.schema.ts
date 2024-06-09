import { DescriptionAndOptions } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop({ required: false })
  github?: string;

  @Prop({ required: false })
  video?: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
