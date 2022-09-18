import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.servise';
import { UserInfoEntity } from '../user.info/user.info.entity';
import { TableEntity } from '../tables/table.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserInfoEntity, TableEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class LoginModule {}
