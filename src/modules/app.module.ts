import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TelegrafModule } from "nestjs-telegraf";
import { DatabaseModule } from "./database.module";
import { UserModule } from "./user/user.module";
import { session } from 'telegraf';
import { StartModule } from "./start/start.module";
import { WizardModule } from "./wizard/wizard.module";
import { MeetModule } from "./meet/meet.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        launchOptions: {
          dropPendingUpdates: true,
          allowedUpdates: ['callback_query', 'chat_member', 'message', 'my_chat_member'],
        },
        middlewares: [session()],
        token: configService.get<string>('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
    StartModule,
    WizardModule,
    MeetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
