import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  name: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, username: 'user1', name: 'John Doe', password: 'password1' },
    { id: 2, username: 'user2', name: 'Jane Doe', password: 'password2' },
    { id: 3, username: 'user3', name: 'Bob Smith', password: 'password3' },
    { id: 4, username: 'user4', name: 'Alice Smith', password: 'password4' },
    { id: 5, username: 'user5', name: 'Charlie Brown', password: 'password5' },
  ];

  async findOne (username: string) : Promise<User | undefined> {
    return this.users.find(user => username === user.username)
  }
}
