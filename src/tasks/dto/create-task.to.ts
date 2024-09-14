// interface 
import { IsString, min, MinLength, IsNumber, IsBoolean } from "class-validator";

export class CreateTaskDto {
    
    @IsString()
    @MinLength(20)
    name: string;
    
    @IsNumber( )
    age: number;
    
    @IsBoolean()
    description: boolean;
}