import { user, contract } from '@/axios/api'
import instance from '@/axios/config/axios.net'


export const getContractAddress = async () => {
    try {
        const result = await instance.get(contract.address)
        return result.data.data
    } catch (e) {
        console.log('获取合约最新地址出错了！');
    }
}

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
/**
 * @description 登录
 */
export const signIn = async (data: signIn) => {
    try {
        const result = await instance.post(user.signIn, data)
        return result
    } catch (e) {
        console.log('登录请求出错了！');
    }
}