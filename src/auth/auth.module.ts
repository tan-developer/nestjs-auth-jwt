import { JwtStrategy } from './strategy/jwt.strategy';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [UsersModule , JwtModule.register({
    secret : 'LOL_HEHE',
    signOptions : {
      expiresIn : 3600
    }
  })],
  providers: [AuthService , LocalStrategy , JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
