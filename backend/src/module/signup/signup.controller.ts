import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { UserDto } from '../../dto/user.dto';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}
  @Post()
  async create(@Body() userDto: UserDto): Promise<any> {
    return this.signupService.create(userDto);
  }
}
