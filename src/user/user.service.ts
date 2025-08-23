import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    readonly userRepository: Repository<UserEntity>,
  ) {}

  async signup({
    email,
    password,
    role,
  }: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw Error('이미 존재하는 회원입니다.');
    } else {
      const newUser = this.userRepository.create({
        email,
        password,
        role,
      });
      await this.userRepository.save(newUser);
      return { success: true };
    }
  }
}
