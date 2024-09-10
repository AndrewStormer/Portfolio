import { ProjectReference } from 'src/project-reference/entities/project-reference.entity';
import { ProjectXSkill } from 'src/project-x-skill/entitites/project-x-skill.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: '1024' })
  description: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true })
  github?: string;

  @Column({ nullable: true })
  video?: string;

  @OneToMany(() => ProjectXSkill, (pxs: ProjectXSkill) => pxs.project_id, {
    eager: true,
    cascade: true
  })
  @JoinColumn({ name: 'project_id' })
  skills?: ProjectXSkill[];

  @OneToMany(() => ProjectReference, (pr: ProjectReference) => pr.project_id, {
    eager: true,
    cascade: true
  })
  @JoinColumn({ name: 'project_id' })
  references?: ProjectReference[];
}
