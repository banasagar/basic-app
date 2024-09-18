import { Country } from 'src/country/entities/country.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  name: string;

  @Column()
  email: string;

  @Column()
  class: number;

  @ManyToOne(() => Country, (country) => country.user)
  country: Country;
}
