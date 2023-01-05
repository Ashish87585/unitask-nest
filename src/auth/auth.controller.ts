import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthLoginDto } from './auth-login.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async test() {
    return "Success Login"
  }
}
