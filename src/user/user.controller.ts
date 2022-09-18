import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { StatusCodes } from 'http-status-codes';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ParamDto } from 'src/dto/param.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(StatusCodes.CREATED)
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.add(createUserDto);
  }

  @Get()
  @HttpCode(StatusCodes.OK)
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  @HttpCode(StatusCodes.OK)
  async findOne(@Param() param: ParamDto) {
    const user = await this.userService.findBy(param.id);

    if (!user) {
      throw new NotFoundException(StatusCodes.NOT_FOUND);
    }

    return user;
  }

  @Put(':id')
  @HttpCode(StatusCodes.OK)
  async update(@Param() param: ParamDto, @Body() updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userService.updateBy(
      param.id,
      updateUserDto,
    );

    if (updatedUser === StatusCodes.FORBIDDEN) {
      throw new ForbiddenException(StatusCodes.FORBIDDEN);
    }

    if (!updatedUser) {
      throw new NotFoundException(StatusCodes.NOT_FOUND);
    }

    return updatedUser;
  }

  @Delete(':id')
  @HttpCode(StatusCodes.NO_CONTENT)
  async remove(@Param() param: ParamDto) {
    const user = await this.userService.removeBy(param.id);

    if (!user) {
      throw new NotFoundException(StatusCodes.NOT_FOUND);
    }

    return user;
  }
}
