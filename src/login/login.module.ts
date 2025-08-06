import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { LoginRepository } from './login.repository';
import { LoginEntity } from './login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoginEntity])],
  controllers: [LoginController],
  providers: [LoginService, LoginRepository],
  exports: [LoginService],
})
export class LoginModule {}
