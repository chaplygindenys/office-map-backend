import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { UserInfoEntity } from '../user.info/user.info.entity';
import { TableEntity } from '../tables/table.entity';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.servise';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserInfoEntity, TableEntity]),
  ],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TableModule {}
