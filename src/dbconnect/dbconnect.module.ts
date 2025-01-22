import { Module } from '@nestjs/common';
import { DbconnectController } from './dbconnect.controller';
import { DbconnectService } from './dbconnect.service';
import { MongooseModule } from '@nestjs/mongoose';
import {authschema} from './schema/dbconnect.schema';
@Module({
  imports:[MongooseModule.forFeature([{name:"Auth",schema:authschema}])],
  controllers: [DbconnectController],
  providers: [DbconnectService]
})
export class DbconnectModule {}
