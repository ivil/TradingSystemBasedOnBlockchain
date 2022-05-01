import { contractInstance } from '@/web3/common.api'


/**
 * 
 * @returns 生态积分全名
 */
export const name = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.name().call()
}

/**
 * 
 * @returns 生态积分符号
 */
export const symbol = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.symbol().call()
}

/**
 * 
 * @returns 生态积分余额
 */
export const balanceOf = async () => {
    const [contract, account] = await contractInstance()
    return await contract.methods.balanceOf(account).call()
}

/**
 * 
 * @returns 获取生态积分总量
 */
export const totalSupply = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.totalSupply().call()
}

/**
 * 
 * @dev 转账
 * @param to 对方账户地址
 * @param value 数额
 * @returns 
 */
export const transfer = async (to: string, value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.transfer(to, value).send({ from: account })
}

/**
 * @dev 获取指定通证信息
 * @param symbol 通证符号
 * @returns 
 */
export const getTokenInfo = async (symbol: string) => {
    const [contract] = await contractInstance()
    return await contract.methods.getTokenInfo(symbol).call()
}

/**
 * @dev 获取全部通证信息
 * @returns 
 */
export const getAllTokensInfo = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.getAllTokensInfo().call()
}

/**
 * @dev 获取指定通证余额
 * @returns 
 */
export const getTokenBalance = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.getTokenBalance().call()
}

/**
 * @dev 通证转账
 * @param symbol 通证符号
 * @param to 对方账户地址
 * @param value 通证数量
 * @returns 
 */
export const transferToken = async (symbol: string, to: string, value: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.transferToken(symbol, to, value).send({ from: account })
}

/**
 * @dev 出售通证
 * @param symbol 通证符号
 * @param value 通证数量
 * @param price 出售价格
 * @returns 
 */
export const sell = async (symbol: string, value: number, price: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.sell(symbol, value, price).send({ from: account })
}

/**
 * @dev 取消出售
 * @param index 所发布商品的序列号
 * @returns 
 */
export const cancelSell = async (index: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.cancelSell(index).send({ from: account })
}

/**
 * @dev 购买通证
 * @param index 在售商品序列号
 * @returns 
 */
export const buy = async (index: number) => {
    const [contract, account] = await contractInstance()
    return await contract.methods.buy(index).send({ from: account })
}

export const getPersonalPool = async () => {
    const [contract] = await contractInstance()
    return await contract.methods.getPersonalPool().call();
}