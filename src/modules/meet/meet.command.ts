import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Action, Command, Ctx, InjectBot, Update } from "nestjs-telegraf";
import { getIdFromAction } from "src/helpers/getIdFromAction";
import { Context, Scenes, Telegraf } from "telegraf";
import { MeetService } from "./meet.service";


const savedInvitationMessages = [
  {
    messageId: 1032,
    telegramId: 346333684,
    willGo: true,
  },
  {
    messageId: 1031,
    telegramId: 442894190,
    willGo: false,
  },
];

@Injectable()
@Update()
export class MeetCommand {
  constructor(private meetService: MeetService, 
  @InjectBot()
    private bot: Telegraf<Context>, 
  private readonly httpService: HttpService) {}

  @Command('meet')
  async createMeeting(@Ctx() ctx: Scenes.SceneContext) {
    const userBadges = await this.meetService.getUserBadges(ctx);


    await ctx.reply('Choose meeting type: ', {
      reply_markup: {
        inline_keyboard: this.meetService.generateMeetingButtons(userBadges),
      },
    });
  }

  @Action(/MEETING_TYPE_.*/)
  async repertuar(@Ctx() ctx: Scenes.SceneContext) {
    const choosedBadgeId = getIdFromAction(ctx);

    ctx.scene.enter('meeting', { badgeId: choosedBadgeId });
  }

  @Action(/INVITATION_RESULT_*/)
  async decisionByInvitation(@Ctx() ctx: any) {
    const [, , decision, userTelegramId, badgeId]: string[] = ctx.callbackQuery.data.split('_');
    // TODO: find user in DB with entered email
    const allUser = await this.httpService.axiosRef.get(`/user`);
    console.log({ allUser });
    const bAray = ['beer', 'movie', 'hookah'];

    const invitedUsers = allUser.data.filter(
      (o) =>
        (o.beer === bAray[+badgeId - 1] ||
          o.movie === bAray[+badgeId - 1] ||
          o.hookah === bAray[+badgeId - 1]) && (typeof o.telegram_id ==='string'||typeof o.telegram_id ==='number'),
    );
    console.log({ invitedUsers });





    const [myInfo] = allUser.data.filter((u) => +u.telegram_id === +userTelegramId);
    console.log({myInfo})

    if (decision === 'ACCEPT') {
      await Promise.all(
        invitedUsers.map((u) =>
          this.bot.telegram.sendMessage( +u.telegram_id, `${myInfo.lastName} ${myInfo.firstName} will go with you 😊`),
        ),
      );

      return;
    }

    if (decision === 'REJECT') {
      await Promise.all(
        invitedUsers.map((u) =>
          this.bot.telegram.sendMessage(+u.telegram_id, `${myInfo.lastName} ${myInfo.firstName} won't go with you 😔`),
        ),
      );
    }
  }
}
