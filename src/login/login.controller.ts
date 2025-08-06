import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { LoginEntity } from './login.entity';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async createUser(@Body() loginDto: LoginDto): Promise<LoginEntity> {
    return await this.loginService.createUser(loginDto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<LoginEntity | undefined> {
    return await this.loginService.findById(Number(id));
  }
}
