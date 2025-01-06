import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';
import { Skill } from './entities/skill.entity';

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>
  ) {}

  async getSkills() {
    const skills = await this.skillRepository.find();
    if (!skills) {
      throw new NotFoundException('Error: Could not load skills');
    }
    return skills.sort((a, b) => b.confidence - a.confidence);
  }

  async create(skill: CreateSkillDto) {
    return await this.skillRepository.save(skill);
  }
  async update(id: number, skill: UpdateSkillDto) {
    await this.skillRepository.update(id, {
      ...skill
    });
    return this.skillRepository.findOne({
      where: { id }
    });
  }
}
