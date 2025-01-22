import { Module } from '@nestjs/common';
import { SuperadminController } from './superadmin.controller';
import { SuperadminService } from './superadmin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { authschema } from 'src/dbconnect/schema/dbconnect.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'superadmin',schema:authschema}])],
  controllers: [SuperadminController],
  providers: [SuperadminService]
})
export class SuperadminModule {}
