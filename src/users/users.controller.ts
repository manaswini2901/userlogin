import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { User } from './users.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created', type: User })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List of users', type: [User] })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
