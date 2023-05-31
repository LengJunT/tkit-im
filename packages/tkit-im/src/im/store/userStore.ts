/**
 * 用户相关数据状态
 */
import {create} from 'zustand'

type User = {username: string, label: string, id: string, accessToken: string}

export interface UserStore {
    userInfo: User | null
    setUserInfo: (token: UserStore['userInfo']) => void

}
const useUserStore = create<UserStore>((set) => ({
    userInfo: null,
    setUserInfo: (userInfo) => set({userInfo})
}))
export default useUserStore
