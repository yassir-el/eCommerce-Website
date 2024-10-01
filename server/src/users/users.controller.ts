import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { User, UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    GetUsers(@Query('kw') kw? : string): User[] {
        return this.usersService.findAll(kw);
    }

    @Get(":id")
    GetUserById(@Param('id', ParseIntPipe) id : number) {
        return this.usersService.findOne(id);
    }
 
    @Post()
    CreateUser(@Body(ValidationPipe) user:CreateUserDTO) {
        return this.usersService.createUser(user);
    }

    @Put(":id")
    UpdateUser(@Body() args , @Param("id", ParseIntPipe) id :number) {
        return this.usersService.updateUser(id, args)
    }

    @Delete(":id")
    DeleteUser(@Param("id", ParseIntPipe) id : number) {
        return this.usersService.deleteUser(id);
    }
}