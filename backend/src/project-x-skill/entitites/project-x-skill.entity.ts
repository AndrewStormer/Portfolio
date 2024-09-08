import { Project } from 'src/project/entities/project.entity';
import { Skill } from 'src/skill/entities/skill.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class ProjectXSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(() => Project)
  project_id: number;

  @Column()
  @OneToOne(() => Skill, {
    eager: true,
    cascade: true
  })
  @JoinColumn({ name: 'skill_id' })
  skill_id: number;
}
