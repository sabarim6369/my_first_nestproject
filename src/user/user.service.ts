import { Injectable } from '@nestjs/common';
import { userschema } from './schema/user.module';
import { InjectModel } from '@nestjs/mongoose';
import {User} from './schema/user.module';
import type { Model } from 'mongoose';
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private studentModel: Model<User>) {}
    gugun:(string|number)[]=[];
    findAll():string{
        return 'returning all data'
    }
    createalluser(obj:{name:string,age:number}):string{
        console.log(obj);
        return "user created successfully";
    }
    updateuser(obj:{name?:string,age?:number}):string{
        console.log(obj);
        return 'user updated successfully';
    }

}
