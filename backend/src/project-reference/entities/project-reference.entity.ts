import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectReference {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToOne(() => Project)
  project_id: number;

  @Column({ nullable: false })
  text: string;

  @Column({ nullable: false })
  link: string;
}
