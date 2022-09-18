import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../utilities/base.entity';
import { TableEntity } from '../tables/table.entity';
import { UserInfoEntity } from '../user.info/user.info.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100 })
  lastName: string;

  @Column({ name: 'avatar', type: 'varchar', length: 1000 })
  avatar: string;

  @Column({ name: 'profession', type: 'varchar', length: 100 })
  profession: string;

  @Column({ name: 'login', type: 'varchar', length: 100 })
  login: string;

  @Column({ name: 'password', type: 'varchar', length: 100 })
  password: string;

  @Column({ name: 'telegram', type: 'varchar', length: 100 })
  telegram: string | undefined;

  @Column({ name: 'instagram', type: 'varchar', length: 100 })
  instagram: string | undefined;

  @Column({ name: 'linked_in', type: 'varchar', length: 100 })
  linkedIn: string | undefined;

  @OneToOne(() => TableEntity, ({ user }) => user, {})
  @JoinColumn({ name: 'table_id', referencedColumnName: 'id' })
  table: TableEntity;

  @OneToOne(() => UserInfoEntity, ({ user }) => user)
  userInfo: UserInfoEntity;
}
