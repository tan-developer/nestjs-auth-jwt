import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService : UsersService, private readonly jwtService : JwtService)  {}

  async validateUser(username: string , password: string) : Promise<Omit<User, "password" | "username"> | undefined> {
    const user = await this.userService.findOne(username);

    if(user && user.password === password) {
      const {password , username , ...rest} = user
      return rest
    }

    return undefined;
  }

  async login (user: any) {
    const payload = {name : user.name , sub : user.id}

    return {
      access_token : this.jwtService.sign(payload)
    }
  }
}
