import {POST, GET} from '../utils/fetch'


export const checkLogin = () => {
    return GET('/api/users/checkLogin')
}
