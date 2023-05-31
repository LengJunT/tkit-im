import {POST} from '../utils/fetch'


export const login = (params: {
    username: string,
    password: string
}) => {
    return POST('/api/auth/login', params)
}
