import { Controller,Get,Post,Put,Patch,Body,Delete } from '@nestjs/common';
import {DbconnectService} from './dbconnect.service';
import  { dbconnectdocument,  authdto } from './schema/dbconnect.schema';
@Controller('dbconnect')
export class DbconnectController {
    constructor(private dbconnectservice:DbconnectService){}
    @Get()
    async getallusers():Promise<dbconnectdocument[]>{
        return await this.dbconnectservice.getallusers();
    }
    @Post()
    async createuser(@Body() data:authdto):Promise<dbconnectdocument|string>{
      return this.dbconnectservice.createnewusers(data);
    }
    
    @Patch('updateAuth')
    async updateuser(@Body() data:authdto):Promise<dbconnectdocument[]>{
        return this.dbconnectservice.updateusers(data);
    }
    @Delete()
    async deleteuser(@Body() data:{email:string}):Promise<dbconnectdocument[]>{
        return this.dbconnectservice.deleteusersbyemail(data.email);
    }
    

}
