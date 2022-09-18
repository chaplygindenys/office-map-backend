import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './login/auth.module';
import { DatabaseModule } from './database.module';
import { TableModule } from './tables/tables.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    LoginModule,
    TableModule,
  ],
})
export class MainModule {}
