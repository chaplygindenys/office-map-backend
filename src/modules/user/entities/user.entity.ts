import { Exclude } from "class-transformer";
import { IUser } from "src/modules/types";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('users')
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id: number;

  // @Column({ name: 'avatar', type: 'varchar', length: 1000 })
  // avatar: string;

  // @Column({ name: 'first_name', type: 'varchar', length: 1000 })
  // firstName: string;

  // @Column({ name: 'last_name', type: 'varchar', length: 1000 })
  // lastName: string;

  // @Column({ name: 'info_id', type: 'int4' })
  // infoId: number;

  @Column({ name: 'login', type: 'varchar', length: 1000 })
  login: string;

  // @Column({ name: 'profession', type: 'varchar', length: 1000 })
  // profession: string;

  // @Column({ name: 'telegram', type: 'varchar', length: 1000 })
  // telegram: string;

  // @Column({ name: 'instagram', type: 'varchar', length: 1000 })
  // instagram: string;

  // @Column({ name: 'linkedIn', type: 'varchar', length: 1000 })
  // linkedIn: string;

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
