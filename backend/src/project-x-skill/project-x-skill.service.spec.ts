import { Test, TestingModule } from '@nestjs/testing';
import { ProjectXSkillService } from './project-x-skill.service';

describe('ProjectXSkillService', () => {
  let service: ProjectXSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectXSkillService],
    }).compile();

    service = module.get<ProjectXSkillService>(ProjectXSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
