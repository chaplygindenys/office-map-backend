import { ForbiddenException, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private todoRepository: Repository<UserEntity>,
  ) {}

  signIn(login, password): Promise<UserEntity> {
    const user = this.todoRepository.findOneOrFail({
      where: { login, password },
    });
    if (user) {
      return user;
    }
    throw new ForbiddenException(`User not exist!`);
  }
}
