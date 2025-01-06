import { Test, TestingModule } from '@nestjs/testing';
import { ProjectReferenceController } from './project-reference.controller';
import { ProjectReferenceService } from './project-reference.service';

describe('ProjectReferenceController', () => {
  let controller: ProjectReferenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectReferenceController],
      providers: [ProjectReferenceService],
    }).compile();

    controller = module.get<ProjectReferenceController>(ProjectReferenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
