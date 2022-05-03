import Web3 from 'web3'
import Contract from '@/web3/contract.abi'

const nodeHost = "http://127.0.0.1:7777"
const abi = Contract.TradingSystem.abi
const address = Contract.TradingSystem.address

/**
 * @description 创建web3实例
 * @returns web3实例
 */
export const createWeb3 = async () => {
    const web3 = await window.ethereum.enable().then(() => {
        const web3 = new Web3(window.web3.currentProvider || nodeHost)
        // console.log("web3实例已创建！");
        return web3
    }, () => {
        console.log('创建web3实例出错了！');
        return null
    })
    return web3
}

/**
 * 
 * @description 创建合约
 * @param abi 合约二进制接口
 * @param address 合约地址
 * @returns 合约实例和当前账户地址
 */
export const createContract = async (abi: any, address: string) => {
    const web3 = await createWeb3()
    const contract = new web3.eth.Contract(abi, address)
    const [account] = await web3.eth.getAccounts()
    return [contract, account]
}

/**
 * @description 创建合约实例
 * @returns 合约实例及当前账户地址
 */
export const contractInstance = async () => {
    const [contract, account] = await createContract(abi, address)
    return [contract, account]
}
