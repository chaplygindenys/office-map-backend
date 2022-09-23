import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MeetModule } from "../meet/meet.module";
import { AuthWizard } from "./auth.wizard";
import { MeetingWizard } from "./meeting.wizard";


@Module({
  imports: [
    MeetModule,
    HttpModule.registerAsync({
      useFactory: async () => ({
        baseURL: 'http://192.168.88.148:8080',
      }),
    }),
  ],
  providers: [AuthWizard, MeetingWizard],
})
export class WizardModule {}
