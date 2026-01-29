import { IsString , IsEmail , IsNotEmpty } from "class-validator";

export class UserDTO {
    @IsEmail() 
    email : string 
    @IsString() 
    @IsNotEmpty() 
    password: string 
    @IsString() 
    name : string 
}