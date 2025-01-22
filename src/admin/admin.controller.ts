import { Controller, Get,Post,Body} from '@nestjs/common';
import {AdminService} from './admin.service';
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}
    @Get()
    getAdmin():string{
        return this.adminService.getallAdmin()
    }
    @Post('')
    createallAdmin(@Body() name:string):string{
        console.log(name);
        return this.adminService.createallAdmin(name);
    }
    
}
