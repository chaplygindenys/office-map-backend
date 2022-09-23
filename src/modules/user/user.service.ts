import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StatusCodes } from "http-status-codes";
import { DeleteResult, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";


@Injectable()
export class UserService {
  @InjectRepository(UserEntity)
  private userRepositoriy: Repository<UserEntity>;

  async add(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepositoriy.create({
      ...createUserDto,
    });

    return await this.userRepositoriy.save(user);
  }

  async findAll(): Promise<Array<UserEntity>> {
    return await this.userRepositoriy.find();
  }

  async findByLogin(login: string): Promise<UserEntity> {
    return await this.userRepositoriy.findOne({ where: { login } });
  }

  async findBy(id: number): Promise<UserEntity> {
    return await this.userRepositoriy.findOne({ where: { id } });
  }

  async updateBy(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity | string | number> {
    const user = await this.userRepositoriy.create({
      id,

      ...updateUserDto,
    });

    const oldUser = await this.userRepositoriy.findOne({ where: { id } });
    if (!oldUser) {
      return StatusCodes.NOT_FOUND;
    }

    await this.userRepositoriy.save(user);

    return await this.userRepositoriy.findOne({ where: { id } });
  }

  removeBy = async (id: number): Promise<DeleteResult> => {
    const user = await this.userRepositoriy.findOne({ where: { id } });

    if (!user) {
      return null;
    }

    return await this.userRepositoriy.delete({ id });
  };
}
