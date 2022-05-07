import { contractInstance } from './common.api'

/**
 * @dev 获取交易池中的未被响应交易
 */
export const transactionsOfPool = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.transactionsOfPool().call()
}



/**
 * @dev 发布需求（出售）
 * @param symbol 通证符号
 * @param value 要交易的通证数量
 * @param price 价格
 * @returns 
 */
export const post_sell = async (symbol: string, value: number, price: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.sell(symbol, value, price).send({ from: account })
}

/**
 * @dev 取消发布(出售)
 * @param index 交易序列号
 * @returns 
 */
export const cancelSell = async (index: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.cancelSell(index).send({ from: account })
}

/**
 * 响应需求(出售)
 * @param index 交易序列号
 * @returns 
 */
export const confirm_sell = async (index: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.buy(index).send({ from: account })
}

/**
 * @dev 获取个人交易记录
 */
export const getPersonalPool = async () => {
    const [contract, account] = await contractInstance()
    return await contract.methods.getPersonalPool().call({ from: account })
}
