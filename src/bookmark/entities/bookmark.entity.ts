import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BookMark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @Column()
  link: string;

  @CreateDateColumn({ name: 'created_up', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
