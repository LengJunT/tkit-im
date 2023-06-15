import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import {FriendMap} from './entity/friend.entity'
import {UsersModule} from '../users/users.module'
// import {User} from '../users/entity/user.entity'

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([FriendMap])],
  controllers: [FriendController],
  providers: [FriendService],
  exports: [FriendService]
})
export class FriendModule {}
