import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import  { dbconnectdocument } from 'src/dbconnect/schema/dbconnect.schema';

@Injectable()
export class SuperadminService {
    constructor(@InjectModel('superadmin') private authmodel:Model<dbconnectdocument>){}
    getallusers(){
        return this.authmodel.find();
    }
}
