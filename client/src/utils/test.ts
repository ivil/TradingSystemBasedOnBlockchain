// 为了使用私钥对交易进行签名，必须使用缓冲区将它们转换成二进制数据字符串，缓冲区是NodeJS中的全局模块。
// 构建交易对象，签署交易，广播交易
// 关于data参数，可以使用web3.js函数encodeABI()，把contract对象中的智能合约函数转换为十六进制表示。
import Contract from '@/web3/contract.abi'
const Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')

const web3 = new Web3(window.ethereum)
const contract = new web3.eth.Contract(Contract.TradingSystem.abi, Contract.TradingSystem.address)

export const test = () => {
    const account1 = '0x611b204667872F27E73F6adcf31A4d3948Ec5371' // Your account address 1
    const account2 = '0x82b230daFE34Cbd36642b10517E041e11B2ED8ea' // Your account address 2

    const pk1 = '7b4b47551ea88896a38a7a6ed51d9498d0d92bcd281f41a21844a96b400d58d6' // 实际项目中应该从process.env.PRIVATE_KEY_1中读取
    const pk2 = 'e9eb79f3f8e7968aa094274d810aa657d5e2ea6f457dbd41e383e67ad8719e88' // 实际项目中应该从process.env.PRIVATE_KEY_2中读取

    const privateKey1 = Buffer.from(pk1, 'hex')
    const privateKey2 = Buffer.from(pk2, 'hex')

    web3.eth.getTransactionCount(account1, (err: any, txCount: any) => {
        // 创建交易对象
        const txObject = {
            nonce: web3.utils.toHex(txCount),   //为nonce变量赋值，可以使用web3.eth.getTransactionCount()函数获取交易nonce
            gasLimit: web3.utils.toHex(8000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            to: Contract.TradingSystem.address,
            // value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
            data: contract.methods.sell("IVIL", 1, 100).encodeABI() //data – 被调用的智能合约函数的十六进制表示。
        }

        // 签署交易
        const tx = new Tx(txObject)
        tx.sign(privateKey1)

        const serializedTx = tx.serialize()
        const raw = '0x' + serializedTx.toString('hex')

        // 广播交易
        web3.eth.sendSignedTransaction(raw, (err: any, txHash: any) => {
            console.log('txHash:', txHash)
            // 可以去ropsten.etherscan.io查看交易详情
        })
    })
}