import { Controller,Get,Post,Body} from '@nestjs/common';
import  { WorkersService } from './workers.service';
import  { workerdto } from './dtos/worker.dto';
import  { workersdocument } from './schema/workers.module';

@Controller('workers')
export class WorkersController {
constructor(private readonly workerservice: WorkersService) {}
        // @Get()
        // getalldata()
        @Post()
        async createworkers(@Body() data:workerdto):Promise<workersdocument>{
            console.log("came in")
            return await this.workerservice.createworker(data);
        }
        @Get()
        async getalldata():Promise<workersdocument[]>{
            return await this.workerservice.getalldata();
        }
}
