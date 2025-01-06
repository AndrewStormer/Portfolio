import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  department: string;

  @Column({ nullable: false })
  number: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  grade: string;

  @Column({ nullable: true })
  link?: string;

  @Column({ nullable: false })
  priority: number;
}
