import { Test, TestingModule } from '@nestjs/testing';
import { ProjectXSkillController } from './project-x-skill.controller';

describe('ProjectXSkillController', () => {
  let controller: ProjectXSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectXSkillController],
    }).compile();

    controller = module.get<ProjectXSkillController>(ProjectXSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
