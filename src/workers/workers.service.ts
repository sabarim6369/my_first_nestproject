import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { Model } from 'mongoose';
import type { workersdocument } from './schema/workers.module';
import type { workerdto } from './dtos/worker.dto';

@Injectable()
export class WorkersService {
constructor(@InjectModel('Worker') private workermodel: Model<workersdocument>) {}
     async createworker(obj:workerdto):Promise<workersdocument>{
   const worker=new this.workermodel(obj);
   return await worker.save();

     }
     async getalldata():Promise<workersdocument[]>{
      return await this.workermodel.find();
     }
}
