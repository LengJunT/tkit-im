import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './events/events.gateway';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { FriendMap } from './friend/entity/friend.entity'
import { GroupController } from './group/group.controller';
import { GroupService } from './group/group.service';
import { GroupModule } from './group/group.module';
import { FriendController } from './friend/friend.controller';
import { FriendModule } from './friend/friend.module';
// import {UsersService} from './users/users.service'
// import {FriendService} from './friend/friend.service'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'lengjun123',
    database: 'im',
    entities: [User, FriendMap],
    synchronize: true,
  }),AuthModule, UsersModule, GroupModule, FriendModule],
  controllers: [AppController, GroupController],
  providers: [AppService, EventsGateway, GroupService],
})
export class AppModule {}
