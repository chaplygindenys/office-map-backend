import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.servise';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-in')
  async signIn(@Body() authDto: AuthDto): Promise<any> {
    const { login, password } = authDto;
    console.log(authDto);
    return this.authService.signIn(login, password);
  }
}
// import { Crud, CrudController } from '@nestjsx/crud';
// import { UserEntity } from '@cms/users/user.entity';
// import { Controller } from '@nestjs/common';
// import { AuthService } from '@cms/login/auth.servise';
//
// @Crud({
//   model: {
//     type: UserEntity,
//   },
// })
// @Controller('auth')
// export class AuthController implements CrudController<UserEntity> {
//   constructor(public service: AuthService) {}
// }
