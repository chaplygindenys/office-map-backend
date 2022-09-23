import { HttpService } from "@nestjs/axios";
import { Ctx, Wizard, WizardStep } from "nestjs-telegraf";


@Wizard('auth', {
  ttl: 60 * 5,
  enterHandlers: [],
  handlers: [],
  leaveHandlers: [],
})
export class AuthWizard {
  constructor(private readonly httpService: HttpService) {}
  @WizardStep(1)
  async join(@Ctx() ctx: any) {
    await ctx.reply('Enter the email that you use in Map app');

    ctx.wizard.next();
  }

  @WizardStep(2)
  async getEmail(@Ctx() ctx: any) {
    const userEmail = (ctx.message as any)?.text;

    if (!userEmail) {
      await ctx.reply('Please enter message with email');

      ctx.wizard.back();
      ctx.wizard.next();

      return;
    }

    // TODO: find user in DB with entered email
    const allUser = await this.httpService.axiosRef.get(`/user`);
    console.log(allUser);

    const result = allUser.data.find((o) => o.login === userEmail);

    if (!result) {
      await ctx.reply('User with email not found');

      ctx.wizard.back();
      ctx.wizard.next();

      return;
    }
    console.log({ result });
    //TODO: need to update user in DB, add telegramId (ctx.message.from.id)
    const saveResult = await this.httpService.axiosRef.put(`/user/${result.id}`, {
      telegram_id: ctx.message.from.id,
    });

    await Promise.all([ctx.reply('Thanks!'), ctx.scene.leave()]);
  }
}
