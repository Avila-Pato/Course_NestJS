import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, isString, IsString, Max } from "class-validator";



export class CreateUserDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNumber()
    @Max(100)
    age: Number;
}