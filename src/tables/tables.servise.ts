import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TableEntity } from './table.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(TableEntity)
    private todoRepository: Repository<TableEntity>,
  ) {}

  getTableById(id): Promise<TableEntity> {
    const table = this.todoRepository.findOneOrFail({
      where: { id },
      relations: ['user'],
    });
    if (table) {
      return table;
    }
    throw new ForbiddenException(`Table not exist!`);
  }
}
