import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { DeleteResult, getRepository, Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { CRYPT_SALT } from '../settings/index';
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class UserService extends Repository<UserEntity> {
  private readonly userRepository = getRepository(UserEntity);
  constructor() {
    super();
  }
  private async addHashPassword(password: string) {
    return hash(password, CRYPT_SALT);
  }

  async add(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { password, ...newUser } = createUserDto;

    const user = await this.create({
      password: await this.addHashPassword(password),
      ...newUser,
    });

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<UserEntity>> {
    return await this.find();
  }

  async findByLogin(login: string): Promise<UserEntity> {
    return await this.findOne({ where: { login } });
  }

  async findBy(id: number): Promise<UserEntity> {
    return await this.findOne({ where: { id } });
  }

  async updateBy(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity | string | number> {
    const { password, ...newUser } = updateUserDto;

    const user = await this.create({
      id,
      password: await this.addHashPassword(password),
      ...newUser,
    });

    const oldUser = await this.findOne({ where: { id } });
    if (!oldUser) {
      return StatusCodes.NOT_FOUND;
    }

    await this.save(user);

    return await this.findOne({ where: { id } });
  }

  removeBy = async (id: number): Promise<DeleteResult> => {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    return await this.delete({ id });
  };
}
