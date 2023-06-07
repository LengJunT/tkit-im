import {Controller, Get, UnauthorizedException, UseGuards, Post, Request, Body} from '@nestjs/common'
import {UsersService} from './users.service'
import {Public} from '../auth/decorators/public.decorator'
import {AuthGuard} from '../auth/auth.guard'

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    // @Public()
    @UseGuards(AuthGuard)
    @Get('findAllUsers')
    findAllUsers() {
        return this.usersService.findAll()
    }

    @Public()
    @Get('initUser')
    async initUser() {
        const res = await this.usersService.initUser()
        if (res) {
            return res
        }
        return false
    }

    @UseGuards(AuthGuard)
    @Get('checkLogin')
    async checkLogin (@Request() req: any) {
        console.log('checkLogin', req.user)
        const user = await this.usersService.findOne(req.user.account)
        if (user) {
            return user
        }
        return false
    }

}
