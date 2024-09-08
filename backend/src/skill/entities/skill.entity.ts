import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  skill: string;

  @Column({ nullable: false })
  confidence: number; //range 1-5
}
