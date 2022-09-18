import { TableEntity } from 'src/tables/table.entity';
import { UserInfoEntity } from 'src/user.info/user.info.entity';
import { UserEntity } from 'src/users/user.entity';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

export class SeedCourses1663266130531 implements MigrationInterface {
  private readonly tableRepo = getRepository(TableEntity);
  private readonly userRepo = getRepository(UserEntity);
  private readonly userInfoRepo = getRepository(UserInfoEntity);

  public async up(queryRunner: QueryRunner): Promise<void> {
    await this.createTables();
    await this.createUsers();
    await this.createUserInfo();
  }

  private async createUserInfo(): Promise<void> {
    await this.userInfoRepo.save({
      telegram_url: 'dsfdsff',
      telegramId: '4535345535',
      instagramUrl: '@dfafgaffdgdfa',
      user: { id: 1 },
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
  private async createUsers(): Promise<void> {
    await this.userRepo.save({
      firstName: 'Vlad',
      lastName: 'Brykov',
      avatar: '/hghsfhfgh',
      profession: 'Back End',
      login: 'login',
      password: 'password',
      telegram: '@VladislavBrk',
      instagram: '@vl_brykov',
      // linkedIn: '',
      table: { id: 1 },
    });
    await this.userRepo.save({
      firstName: 'Dmytro',
      lastName: 'Sukhariev',
      avatar: '/hghsfhfgh',
      profession: 'Full Stack',
      login: 'login',
      password: 'password',
      telegram: '@dmytro_sukhariev',
      // instagram: '@vl_brykov',
      // linkedIn: '',
      table: { id: 2 },
    });
    await this.userRepo.save({
      firstName: 'Illa',
      lastName: 'Exporter',
      avatar: '/hghsfhfgh',
      profession: 'Front End',
      login: 'login',
      password: 'password',
      telegram: '@Exporter',
      // instagram: '@vl_brykov',
      // linkedIn: '',
      table: { id: 4 },
    });
    await this.userRepo.save({
      firstName: 'Artem',
      lastName: 'Osuskiy',
      avatar: '/hghsfhfgh',
      profession: 'Back End',
      login: 'login',
      password: 'password',
      telegram: '@undefined',
      // instagram: '@vl_brykov',
      // linkedIn: '',
      table: { id: 5 },
    });
    await this.userRepo.save({
      firstName: 'Yaroslav',
      lastName: 'Mudryi',
      avatar: '/hghsfhfgh',
      profession: 'Back End',
      login: 'login',
      password: 'password',
      telegram: '@undefined',
      // instagram: '@vl_brykov',
      // linkedIn: '',
      table: { id: 6 },
    });
  }

  private async createTables(): Promise<void> {
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
    await this.tableRepo.save({
      room: 'new office',
    });
  }
}
