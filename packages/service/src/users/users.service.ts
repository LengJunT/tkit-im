import { Injectable } from '@nestjs/common';
import {getImgUrl} from '../utils'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

export type UserType = {
    account: string
    label: string
    id: string
    password: string
    avatar?: string
};

const users: UserType[] = [
    {
        account: 'gtx',
        label: '钢铁侠',
        id: '1',
        avatar: getImgUrl('gtx.jpeg'),
        password: 'gtx'
    }, {
        account: 'md',
        label: '美队',
        id: '2',
        avatar: getImgUrl('md.jpeg'),
        password: 'md'
    },{
        account: 'ls',
        label: '雷神',
        id: '3',
        avatar: getImgUrl('ls.jpeg'),
        password: 'ls'
    },{
        account: 'hgf',
        label: '黑寡妇',
        id: '4',
        avatar: getImgUrl('hgf.jpeg'),
        password: 'hgf'
    },{
        account: 'zzx',
        label: '蜘蛛侠',
        id: '5',
        avatar: getImgUrl('zzx.jpeg'),
        password: 'zzx'
    },{
        account: 'ljr',
        label: '绿巨人',
        id: '6',
        avatar: getImgUrl('ljr.jpeg'),
        password: 'ljr'
    }
]

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    async findOne(account: string): Promise<User | null> {
        return this.usersRepository.findOneBy({ account: account });
    }

    // async findAll () {
    //     return this.users
    // }

    async findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async batchFind (userIds: string[]) {
        const userList = await this.usersRepository
            .createQueryBuilder('users')
            .where('users.id IN(...ids)', { ids: userIds})
            .getMany()
        return userList.map(item => {
            const {password, ...other} = item
            return other
        })
    }

    // findOne(id: number): Promise<User | null> {
    //     return this.usersRepository.findOneBy({ id });
    // }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async initUser () {
        const userLists = users.map(item => {
            return this.usersRepository.create({
                id: Number(item.id),
                name: item.label,
                avatar: item.avatar,
                password: item.password,
                account: item.account,
            })
        })
        const res = await this.usersRepository.save(userLists)
        return res
    }
}
