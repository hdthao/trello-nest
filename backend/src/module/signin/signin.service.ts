import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../../dto/user.dto';
import { User } from '../../entities/user.entity';

@Injectable()
export class SigninService {
  constructor(
    @InjectRepository(User)
    private signinRepository: Repository<User>,
  ) {}
  async signin(userDto: UserDto): Promise<User> {
    const { email, password } = userDto;
    const user = await this.signinRepository.findOne({ where: { email } });
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }
}
