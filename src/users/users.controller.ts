import { Controller, Body } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body()  createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
}
