import { contractInstance } from '@/web3/common.api'

/**
 * 
 * @dev 铸造生态积分
 * @param value 要铸造的数量
 * @returns 
 */
export const createIVIL = async (value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.createIVIL(value).send({ from: account })
}

/**
 * 
 * @dev 销毁生态积分
 * @param value 要销毁的数量
 */
export const destoryIVIL = async (value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.destoryIVIL(value).send({ from: account })
}

/**
 * 
 * @dev 铸造通证
 * @param name 通证名字
 * @param symbol 通证符号
 * @param decimals 小数位数
 * @param total 通证总量
 * @returns 
 */
export const createToken = async (name: string, symbol: string, decimals: number, total: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.createToken(name, symbol, decimals, total).send({ from: account })
}

/**
 * 
 * @dev 销毁通证
 * @param symbol 通证符号
 * @returns 
 */
export const destoryToken = async (symbol: string) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.destoryToken(symbol).send({ from: account })
}

/**
 * @dev 增发指定通证
 * @param symbol 通证符号
 * @param value 通证数量
 * @returns 
 */
export const increaseToken = async (symbol: string, value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.increaseToken(symbol, value).send({ from: account })
}

/**
 * @dev 销毁部分指定通证
 * @param symbol 通证符号
 * @param value 通证数量
 * @returns 
 */
export const decreaseToken = async (symbol: string, value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.decreaseToken(symbol, value).send({ from: account })
}

