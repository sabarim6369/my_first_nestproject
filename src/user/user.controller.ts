import { Controller, Get,Post,Body,Patch} from '@nestjs/common';
import {UserService} from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
    @Get()
    findAll():string{
        return this.userservice.findAll()   
    }
    @Post()
    createalluser(@Body() obj:{name:string,age:number}){
        return this.userservice.createalluser(obj);
    }
    @Patch('updateuser')
    updateuser(@Body() obj:{name?:string,age?:number}){
        return this.userservice.updateuser(obj);
    }
}

