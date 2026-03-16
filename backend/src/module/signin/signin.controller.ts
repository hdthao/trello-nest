import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { User } from '../../entities/user.entity';
import { UserDto } from '../../dto/user.dto';

@Controller('signin')
export class SigninController {
  constructor(private signinService: SigninService) {}
  @Post()
  async signin(@Body() userDto: UserDto): Promise<User> {
    return this.signinService.signin(userDto);
  }
}
