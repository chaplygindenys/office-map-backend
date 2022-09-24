import { Exclude } from 'class-transformer';
import { IUser } from 'src/modules/types';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id: number;

  @Column({ name: 'login', type: 'varchar', length: 1000 })
  login: string;

  @Column({ name: 'avatar', type: 'varchar', length: 1000, nullable: true })
  avatar: string;

  @Column({ name: 'first_name', type: 'varchar', length: 1000, nullable: true })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 1000, nullable: true })
  lastName: string;

  @Column({ name: 'profession', type: 'varchar', length: 1000, nullable: true })
  profession: string;

  @Column({ name: 'telegram', type: 'int8', nullable: true })
  telegramId: number;

  @Column({ name: 'instagram', type: 'varchar', length: 1000, nullable: true })
  instagram: string;

  @Column({ name: 'linkedIn', type: 'varchar', length: 1000, nullable: true })
  linkedIn: string;

  @Exclude()
  @CreateDateColumn({
    transformer: {
      from: (value: Date) => value.getTime(),
      to: (value: Date) => value,
    },
  })
  createdAt: number;

  @Exclude()
  @UpdateDateColumn({
    transformer: {
      from: (value: Date) => value.getTime(),
      to: (value: Date) => value,
    },
  })
  updatedAt: number;

  @Exclude()
  @Column({ name: 'password', type: 'varchar', length: 1000 })
  password: string;

  constructor(userInfo: Partial<UserEntity>) {
    Object.assign(this, userInfo);
  }
}
