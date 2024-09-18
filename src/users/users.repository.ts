import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/country/entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(Country)
    private userRepo: Repository<Country>,
  ) {}
  // private users: User[] = [
  //   {
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //     class: 12,
  //   },
  //   {
  //     name: 'Jane Smith',
  //     email: 'jane.smith@example.com',
  //     class: 11,
  //   },
  // ];

  getAllUsers() {
    // return this.users;
  }

  checkIfUserExists(email: string) {
    // return Boolean(this.users.find((u) => u.name === email));
  }

  registerNewUser(user: User): void {
    // this.users.push(user);
  }

  findByEmail(email: string) {
    // return this.users.find((u) => u.email === email);
  }

  // updateUser(email: string, updatedUser: User): void {
  //   return this.manager.save(User, updatedUser);
  // }
}
