import { Injectable, UnauthorizedException} from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService) {
    }


    async signIn(account: string, pass: string) {
        const user = await this.usersService.findOne(account);
        if (user?.password !== pass) {
            throw new UnauthorizedException('用户名或密码错误');
        }
        const { password, ...res } = user
        const payload = { sub: user.id, id: user.id, time: new Date().valueOf() ,account: user.account };
        return {
            accessToken: await this.jwtService.signAsync(payload),
            ...res
        };
    }
}
