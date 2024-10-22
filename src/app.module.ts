import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PagesModule } from './pages/pages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PagesModule,
  ],
})
export class AppModule {}
