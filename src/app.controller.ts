import { JwtAuthGuard } from './auth/strategy/jwt.guard';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/strategy/local.guard';
import { AuthenticatedGuard } from './auth/strategy/authenticated.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req):any {
    return req.user
  }
}
