import { Module } from '@nestjs/common';
import { WorkersController } from './workers.controller';
import { WorkersService } from './workers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { workersschema } from './schema/workers.module';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Worker', schema: workersschema }])],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
