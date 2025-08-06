
import { Injectable } from '@nestjs/common';
import { LoginRepository } from './login.repository';
import { LoginDto } from './dto/login.dto';
import { LoginEntity } from './login.entity';

@Injectable()
export class LoginService {
  constructor(private readonly loginRepository: LoginRepository) {}

  async createUser(loginDto: LoginDto): Promise<LoginEntity> {
    return await this.loginRepository.create(loginDto);
  }

  async findById(id: number): Promise<LoginEntity | undefined> {
    return await this.loginRepository.findById(id);
  }
}
