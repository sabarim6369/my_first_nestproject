import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import {UserSchema} from './user/user.schema'
import { EventModule } from './event/event.module';
import { WorkersModule } from './workers/workers.module';
import { WorkerModule } from './worker/worker.module';
import { DbconnectModule } from './dbconnect/dbconnect.module';
import { SuperadminModule } from './superadmin/superadmin.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestproject'),UserModule, AdminModule, EventModule, WorkerModule,WorkersModule, DbconnectModule, SuperadminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
