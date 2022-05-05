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
        const web3 = new Web3(window.ethereum || window.web3.currentProvider || nodeHost)
        return web3
    }, () => {
        console.warn('用户拒绝了授权');
        return null
    })
    return web3
}

/**
 * @dev 获取当前账户
 * @returns 当前账户
 */
export const getAccount = async () => {
    const web3 = await createWeb3()
    const [account] = await web3.eth.getAccounts()
    return account
}

/**
 * @dev 监听账户变动
 * @param func 回调函数
 * @returns 当前账户地址
 */
export const listenAccountsChanged = (func: () => void) => {
    return window.ethereum.on('accountsChanged', (accounts: any) => {
        const [account] = accounts
        func();
        return account
    })
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
