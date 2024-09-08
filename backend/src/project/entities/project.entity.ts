import { DEFAULT_METHOD_KEY } from '@nestjs/common/module-utils/constants';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
