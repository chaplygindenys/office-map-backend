import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Scenes } from 'telegraf';

import { Badge, badges, Badges } from '../../mock/badges';
import { users, Users } from '../../mock/users';

@Injectable()
export class MeetService {
  constructor(private readonly httpService: HttpService) {}
  getUserBadges = async (ctx: Scenes.SceneContext): Promise<Badges> => {
    const tgId = ctx.message.from.id;
    // TODO: find user in DB with entered email
    const allUser = await this.httpService.axiosRef.get(`/user`);
    console.log(allUser);

    const result = allUser.data.find((o) => +o.telegram_id === tgId);
    console.log(result);
    const badges = [];
    if (result?.beer) badges.push({ id: 1, name: 'beer' });
    if (result?.movie) badges.push({ id: 2, name: 'movie' });
    if (result?.hookah) badges.push({ id: 3, name: 'hookah' });

    return badges;
  };

  generateMeetingButtons = (badges: Badges): { text: string; callback_data: string }[][] => {
    return badges.map((badge) => [
      {
        text: badge.name,
        callback_data: `MEETING_TYPE_${badge.id}`,
      },
    ]);
  };

  getBadgeById = async (id: number): Promise<Badge> => {
    return badges.find((badge) => badge.id === id);
  };

  findUsersWithBadge = async (badgeId: number, excludeId?: number): Promise<any> => {
    // TODO: find user in DB with entered email
    const allUser = await this.httpService.axiosRef.get(`/user`);
    console.log({ allUser });
    const bAray = ['beer', 'movie', 'hookah'];

    const findedUsers = allUser.data.filter(
      (o) =>
        (o.beer === bAray[badgeId - 1] ||
        o.movie === bAray[badgeId - 1] ||
        o.hookah === bAray[badgeId - 1]) && (typeof o.telegram_id ==='string'||typeof o.telegram_id ==='number'),
    );
    console.log({ findedUsers });

    if (typeof excludeId === 'number') {
      return findedUsers.filter((user) => user.telegramId !== excludeId);
    }

    return findedUsers;
  };
}
