import { Controller,Get } from '@nestjs/common';
import { SuperadminService } from './superadmin.service';

@Controller('superadmin')
export class SuperadminController {
    constructor(private superadminservice:SuperadminService){}
    @Get()
    getallusers(){
        return this.superadminservice.getallusers();
    }
}
