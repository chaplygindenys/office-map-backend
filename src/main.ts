import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import 'dotenv/config';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT);
}
bootstrap();
