import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { MeetCommand } from './meet.command';
import { MeetService } from './meet.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async () => ({
        baseURL: 'http://192.168.88.148:8080',
      }),
    }),
  ],
  providers: [MeetCommand, MeetService],
  exports: [MeetService],
})
export class MeetModule {}
