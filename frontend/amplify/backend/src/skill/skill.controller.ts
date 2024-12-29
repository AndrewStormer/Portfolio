import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
  constructor(private skillService: SkillService) {}

  @Get()
  async getSkills() {
    return await this.skillService.getSkills();
  }

  @Post()
  async create(@Body() skill: CreateSkillDto) {
    return await this.skillService.create(skill);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() skill: UpdateSkillDto) {
    return await this.skillService.update(id, skill);
  }
}
