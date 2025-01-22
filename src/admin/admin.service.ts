import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
       name:string[]=[]
    getallAdmin():string{
        return 'admin list has been returned';
    }
    createallAdmin(name:string):string{
        this.name.push(name);
        console.log(name);
        console.log(`Given name is${JSON.stringify(name)}`)
        return 'admin created successfully';
    }

}
