import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto, UpdateUserDto} from "./dto";

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get('')
    findAll() {
        return this.userService.findAll();
    }

    @Get(':idUser')
    findUser(@Param('idUser') id: string) {
        return this.userService.findUser(id);
    }

    @Post('create')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto)
    }

    @Put(':idUser')
    updateUser(
        @Param('idUser') idUser: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        return this.userService.updateUser(idUser, updateUserDto)
    }

    @Delete(':idUser')
    deleteUser(@Param('idUser') idUser : string){
        return this.userService.deleteUser(idUser)
    }

}
