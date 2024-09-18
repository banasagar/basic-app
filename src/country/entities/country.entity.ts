import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({nullable: true})
  subregion: string;

  @Column({nullable: true})
  region: string;

  @OneToMany(() => User, (user) => user.country)
  user: User[];
}
