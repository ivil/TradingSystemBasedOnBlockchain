import { user } from '@/api/api'
import instance from '@/api/config/axios.net'

/**
 * @description 注册
 */
export const signUp = async (data: signUp) => {
    try {
        const result = await instance.post(user.signUp, data)
        return result
    } catch (e) {
        console.log('注册请求出错了！');
    }
}