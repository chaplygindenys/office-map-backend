import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../utilities/base.entity';
import { UserEntity } from '../users/user.entity';

@Entity({ name: 'tables' })
export class TableEntity extends BaseEntity {
  @Column({ name: 'room', type: 'varchar', length: 100 })
  room: string | undefined;

  @OneToOne(() => UserEntity, ({ table }) => table)
  user: UserEntity;

  // @OneToOne(() => TableEntity, ({ user }) => user, {})
  // table: TableEntity;
}
