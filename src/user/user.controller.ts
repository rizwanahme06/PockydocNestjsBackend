import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create() {
    return this.userService.create();
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(id: number) {
    return this.userService.findOne(id);
  }

  @Post(':id')
  update(id: number) {
    return this.userService.update(id);
  }

  @Delete(':id')
  remove(id: number) {
    return this.userService.remove(id);
  }
}
