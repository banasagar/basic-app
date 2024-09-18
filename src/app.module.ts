import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the config globally available
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: true, // Use true for development, false for production
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    CountryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

