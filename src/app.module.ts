import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './user/entites/user.entity';
import { BookMark } from './bookmark/entities/bookmark.entity';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, BookMark],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
