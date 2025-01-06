import { Project } from "../../project/entities/project.entity";
import { Skill } from "../../skill/entities/skill.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class ProjectXSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project)
  project_id: number;

  @ManyToOne(() => Skill, {
    eager: true,
    cascade: true,
  })
  @JoinColumn({ name: "skill_id" })
  skill_id: number;
}
