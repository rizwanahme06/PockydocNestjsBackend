import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestController } from './nest/nest.controller';

@Module({
  imports: [],
  controllers: [AppController, NestController],
  providers: [AppService],
})
export class AppModule {}
