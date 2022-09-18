import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from '../users/user.entity';
import { TableEntity } from './table.entity';

@EntityRepository(TableEntity)
export class TableRepository extends Repository<TableEntity> {
  public getTableById(id: number): Promise<any> {
    return this.find({
      where: { id: id },
      relations: ['user'],
    });
  }
}
