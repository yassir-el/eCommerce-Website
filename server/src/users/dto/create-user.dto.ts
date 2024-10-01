import { IsString, IsNumber, IsEmail, IsEnum, Length, Min, Max } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @Length(4, 20)
    username: String;

    @IsNumber()
    @Min(18)
    @Max(100)
    age: Number;

    @IsEmail()
    email: String;

    @IsEnum(['Student', 'Staff'], {message: "Role must be either 'Student' or 'Staff'"})
    role: "Student" | 'Staff';
}