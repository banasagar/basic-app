import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import axios from 'axios';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { CountryType } from './entities/types/country.types';

@Injectable()
export class CountryService implements OnModuleInit {
  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}
  async onModuleInit() {
    // Save all countries for the first time only
    /*     const response = await this.saveCountries()
    console.log('Countries saved successfully'); */
  }

  async saveCountries() {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    let countries = response.data;
    // console.log(countries[0]);
    countries = countries.map((country) => {
      return {
        name: country?.name?.common,
        subregion: country?.subregion,
        region: country?.region,
      };
    });
    await this.countryRepository.save(countries, {
      chunk: 100,
    });
  }
  create(createCountryDto: CreateCountryDto) {
    return 'This action adds a new country';
  }

  async findAll() {
    return '';
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
