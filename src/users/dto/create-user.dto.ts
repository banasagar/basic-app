import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsArray()
    hobbies: string[];

    @IsNumber()
    class: number;
}
