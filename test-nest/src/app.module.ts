import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from 'config/database.module';
import { ConfigModule } from '@nestjs/config';
import { ViviModule } from './app/vivi.cosmetique/vivi.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,ViviModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
