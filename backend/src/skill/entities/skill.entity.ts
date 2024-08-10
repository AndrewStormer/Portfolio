import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skill: string;

  @Column()
  confidence: number; //range 1-5
}
