import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm'
import {FriendMap} from './entity/friend.entity'
import {Repository} from 'typeorm'

@Injectable()
export class FriendService {
    constructor(
        @InjectRepository(FriendMap)
        private friendMapRepository: Repository<FriendMap>
    ) {
    }

    async findAll (userId: string) {
        return this.friendMapRepository.findBy({
            userId
        })
    }

    async remove(id: string) {
        await this.friendMapRepository.delete(id)
    }

    async add(userId: string, friendId: string) {
        const res = await this.friendMapRepository.save({
            userId,
            friendId
        })
        return res
    }
}
