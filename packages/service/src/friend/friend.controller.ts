import {Controller, Post, Request, Body, Param, HttpException, HttpStatus, Inject} from '@nestjs/common'
import {FriendService} from './friend.service'
import {UsersService} from '../users/users.service'

@Controller('friend')
export class FriendController {

    @Inject(UsersService)
    private readonly usersService: UsersService;

    @Inject(FriendService)
    private readonly friendService: FriendService;

    @Post('all')
    async getAll (@Request() req: any) {
        const { id } = req.user
        const friends = await this.friendService.findAll(id)
        console.log('getAll', friends)
        const friendIds = friends.map(item => item.friendId)
        const users = await this.usersService.batchFind(friendIds)
        return users
    }

    @Post('add')
    async add (@Body() body: any, @Request() req: any) {
        console.log('add', body)
        const { id } = req.user
        const { friendId } = body
        if (!friendId) {
            throw new HttpException('没有传friendId参数',  HttpStatus.BAD_REQUEST)
        }
        const res = await this.friendService.add(id, friendId)
        if (res) {
            return res
        }
        return false
    }
}
