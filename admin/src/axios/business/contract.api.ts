import { contract } from "../api";
import instance from '../config/axios.net'

export const storeContract = async (address: string) => {
    try {
        const result = await instance.post(contract.storeContract, {
            contractAddress: address
        })
        return result
    } catch (e) {
        console.log("合约地址上传出错了！");
    }
}