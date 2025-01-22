import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import {dbconnectdocument} from './schema/dbconnect.schema'
import { authdto } from './schema/dbconnect.schema';
@Injectable()
export class DbconnectService {
  constructor(
    @InjectModel('Auth') private Authmodel: Model<dbconnectdocument>,
  ) {}

  async getallusers(): Promise<dbconnectdocument[]> {
    return await this.Authmodel.find();
  }
  async createnewusers(data: authdto): Promise<dbconnectdocument | string> {
    const findpreuser = await this.Authmodel.findOne({ email: data.email });
    if (findpreuser) {
      console.log('user already exists');
      return 'user already exists';
    }
    const auth = new this.Authmodel(data);
    return await auth.save();
  }

  async updateusers(data: authdto): Promise<dbconnectdocument[]> {
    console.log(data.email);
    const update = await this.Authmodel.findOneAndUpdate(
      { email: data.email },
      { ...data },
      { new: true },
    );
    if (!update) {
      return [];
    }
    return [update];
  }
  async deleteusersbyemail(data: string): Promise<dbconnectdocument[]> {
    const deleteuser = await this.Authmodel.findOneAndDelete({ email: data });
    if (deleteuser) {
      console.log('user delete successfully');
    } else {
      console.log('user not exists');
    }
    return await this.Authmodel.find();
  }
}
