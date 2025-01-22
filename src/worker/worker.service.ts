import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
    findAll():string{
        return 'returning all data'
    }
}
