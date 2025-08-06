import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginEntity } from './login.entity';

@Injectable()
export class LoginRepository {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginRepo: Repository<LoginEntity>,
  ) {}

  async create(user: { password: string; lastName: string }): Promise<LoginEntity> {
    const newUser = this.loginRepo.create(user);
    return this.loginRepo.save(newUser);
  }

  async findById(id: number): Promise<LoginEntity | undefined> {
    const result = await this.loginRepo.findOneBy({ id });
    return result === null ? undefined : result;
  }

  async findAll(): Promise<LoginEntity[]> {
    return this.loginRepo.find();
  }

  async update(id: number, update: Partial<Omit<LoginEntity, 'id'>>): Promise<LoginEntity | undefined> {
    await this.loginRepo.update(id, update);
    return this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.loginRepo.delete(id);
    return result.affected !== 0;
  }
}
