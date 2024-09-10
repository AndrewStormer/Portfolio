import { Test, TestingModule } from '@nestjs/testing';
import { ProjectReferenceService } from './project-reference.service';

describe('ProjectReferenceService', () => {
  let service: ProjectReferenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectReferenceService],
    }).compile();

    service = module.get<ProjectReferenceService>(ProjectReferenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
