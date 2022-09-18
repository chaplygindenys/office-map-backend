import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../utilities/base.entity';
import { UserEntity } from '../users/user.entity';

@Entity({ name: 'user_info' })
export class UserInfoEntity extends BaseEntity {
  @Column({ name: 'telegram_url', type: 'varchar', length: 1000 })
  telegram_url: string | undefined;

  @Column({ name: 'telegram_id', type: 'varchar', length: 1000 })
  telegramId: string | undefined;

  @Column({ name: 'instagram_url', type: 'varchar', length: 1000 })
  instagramUrl: string | undefined;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;
}
