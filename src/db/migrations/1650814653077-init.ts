import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1650814653077 implements MigrationInterface {
  name = 'init1650814653077';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "avatar" character varying(1000) NOT NULL, "profession" character varying(100) NOT NULL, "login" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "table_id" integer, CONSTRAINT "REL_1e3ed533dd87e54f8de2a91218" UNIQUE ("table_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tables" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "room" character varying(100) NOT NULL, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "telegram_url" character varying(1000) NOT NULL, "telegram_id" character varying(1000) NOT NULL, "instagram_url" character varying(1000) NOT NULL, "user_id" integer, CONSTRAINT "REL_59c55ac40f267d450246040899" UNIQUE ("user_id"), CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_1e3ed533dd87e54f8de2a912187" FOREIGN KEY ("table_id") REFERENCES "tables"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_info" ADD CONSTRAINT "FK_59c55ac40f267d450246040899e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "telegram" character varying(100)`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "instagram" character varying(100)`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "linked_in" character varying(100)`,
    );

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // await queryRunner.query(
    //   `CREATE TABLE "base_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`,
    // );

    await queryRunner.commitTransaction();
    await queryRunner.startTransaction();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "answer_validator" DROP CONSTRAINT "FK_c8644b75f6e0ed30330fab10640"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_stage" DROP CONSTRAINT "FK_44055a75f52ddfcdb9be1cd0a62"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_stage" DROP CONSTRAINT "FK_ef0335d845afcfc6239e159fbc9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_stage" DROP CONSTRAINT "FK_0e5fdc218be169e3fc1f73343a0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "FK_1d3815b0b8dde0d6d1e2f4d0366"`,
    );
    await queryRunner.query(
      `ALTER TABLE "text" DROP CONSTRAINT "FK_2ea24a6a41875b92fc637400deb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "codeword_clue" DROP CONSTRAINT "FK_6dd29bd226c4d8a8ea3701c6b7d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_state" DROP CONSTRAINT "FK_3e1e4fc8b77073dffcf117925f1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_state" DROP CONSTRAINT "FK_3462fd6317f558e170b51d70908"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_state" DROP CONSTRAINT "FK_284c19fa3a92c0b250b81e90062"`,
    );
    await queryRunner.query(
      `ALTER TABLE "episode_state" DROP CONSTRAINT "FK_b4a2551bf2ed8332e160f361299"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_6c47f81ec42cc2eee56c823b6b7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "teacher" DROP CONSTRAINT "FK_f462afc954887cf39bdf9a1efbe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "screen_writer" DROP CONSTRAINT "FK_5b8d7f83a9f19adca98badd8a69"`,
    );
    await queryRunner.query(`DROP TABLE "answer_validator"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_557a06f87aff3cfac01dba1770"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5b8186cd5641b3bf6ee49479ce"`,
    );
    await queryRunner.query(`DROP TABLE "episode"`);
    await queryRunner.query(`DROP TABLE "episode_stage"`);
    await queryRunner.query(`DROP TYPE "public"."episode_stage_trait_enum"`);
    await queryRunner.query(`DROP TABLE "content"`);
    await queryRunner.query(`DROP TYPE "public"."content_type_enum"`);
    await queryRunner.query(`DROP TABLE "text"`);
    await queryRunner.query(`DROP TABLE "codeword_clue"`);
    await queryRunner.query(`DROP TYPE "public"."lang_enum"`);
    await queryRunner.query(`DROP TABLE "episode_state"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_79db6a0da2c5a96474d28d8a89"`,
    );
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "user_profile"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    await queryRunner.query(`DROP TABLE "teacher"`);
    await queryRunner.query(`DROP TABLE "screen_writer"`);
    await queryRunner.query(`DROP TABLE "base_entity"`);
    await queryRunner.query(
      `ALTER TABLE "episode" DROP CONSTRAINT "FK_7be8c7455d3069b804c28b592a3"`,
    );
    await queryRunner.query(`ALTER TABLE "episode" DROP COLUMN "course_id"`);

    await queryRunner.commitTransaction();
    await queryRunner.startTransaction();
  }
}
