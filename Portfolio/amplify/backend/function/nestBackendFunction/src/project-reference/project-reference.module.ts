import { Module } from '@nestjs/common';
import { ProjectReferenceService } from './project-reference.service';
import { ProjectReferenceController } from './project-reference.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectReference } from './entities/project-reference.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectReference])],
  controllers: [ProjectReferenceController],
  providers: [ProjectReferenceService]
})
export class ProjectReferenceModule {}
