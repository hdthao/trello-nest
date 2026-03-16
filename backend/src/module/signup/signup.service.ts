import { Injectable, ConflictException } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../../dto/user.dto';

@Injectable()
export class SignupService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(userDto: UserDto): Promise<User> {
    try {
      const existingUser = await this.userRepository.findOne({
        where: { email: userDto.email },
      });
      if (existingUser) {
        throw new ConflictException('Email already exists');
      }
      const user = this.userRepository.create(userDto);
      return await this.userRepository.save(user);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }
}
