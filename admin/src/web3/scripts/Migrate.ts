import Contract from '../config/contract.abi'
const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction

const ByteCode = Contract.TradingSystem.bytecode

const migrate = async (address: string, privateKey: string) => {
    const pkBuffer = Buffer.from(privateKey, "hex") //使用换冲区将私钥转化成二进制数据字符串，缓冲区是NodeJs的全局模块
    const web3 = new Web3(window.ethereum)
    const txCount = await web3.eth.getTransactionCount(address)

    // 创建交易对象
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(9000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
        data: ByteCode
    }

    const tx = new Tx(txObject)
    tx.sign(pkBuffer)

    const serializedTx = tx.serialize() //序列化
    const raw = '0x' + serializedTx.toString('hex')

    // 广播交易
    const { contractAddress } = await web3.eth.sendSignedTransaction(raw)
    sessionStorage.setItem('contractAddress', contractAddress)
}
export default migrate