import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userschema } from './schema/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: userschema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
