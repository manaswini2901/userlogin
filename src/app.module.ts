
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TweetModule } from './tweet/tweet.module';
import { LoginModule } from './login/login.module';
import { ServiceModule } from './service/service.module';
import { User } from './users/users.entity';
import { LoginEntity } from './login/login.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'manu2901',
      database: 'user',
      entities: [User, LoginEntity],
      synchronize: true,
    }),
    UsersModule,
    TweetModule,
    ServiceModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
