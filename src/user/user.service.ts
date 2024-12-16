import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entites/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usesrRepository: Repository<User>,
  ) {}

  create() {
    return this.usesrRepository.save({});
  }

  findAll() {
    return this.usesrRepository.find({});
  }

  findOne(id: number) {
    return this.usesrRepository.findOneBy({ id });
  }

  update(id: number) {
    return this.usesrRepository.update({ id }, {});
  }

  remove(id: number) {
    return this.usesrRepository.delete({ id });
  }
}
