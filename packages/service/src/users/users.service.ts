import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                username: 'user1',
                label: '用户1昵称',
                id: '1',
                password: 'user1'
            }, {
                username: 'user2',
                label: '用户2昵称',
                id: '2',
                password: 'user2'
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
