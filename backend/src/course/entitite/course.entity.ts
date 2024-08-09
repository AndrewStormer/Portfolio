import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  department: string;

  @Column()
  number: number;

  @Column()
  name: string;

  @Column()
  grade: string;

  @Column()
  link?: string;
}
