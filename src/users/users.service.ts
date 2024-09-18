import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/country/entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
  ) {}
  create(createUserDto: CreateUserDto) {
    // if (!this.userRepository.checkIfUserExists(createUserDto.email)) {
    //   return this.userRepository.registerNewUser(createUserDto);
    // }
  }

  update(email: string, updateUserDto: UpdateUserDto) {}
  findAll() {
    return this.userRepository.getAllUsers();
  }

  findOne(email: string) {
    return this.userRepository.findByEmail(email);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
