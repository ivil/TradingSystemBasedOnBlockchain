import Contract from "../config/contract.abi"
import Web3 from 'web3'
const Tx = require("ethereumjs-tx").Transaction
const Mock = require("mockjs")

const abi: any = Contract.TradingSystem.abi


export const autoCreateEnergies = async () => {
    const contractAddress = sessionStorage.getItem('contractAddress') || ''
    const account = sessionStorage.getItem('adminAccount') || ''
    const privateKey = sessionStorage.getItem("adminPrivateKey") || ''
    const pkBuffer = Buffer.from(privateKey, "hex")
    const web3 = new Web3(window.ethereum)
    const contract = new web3.eth.Contract(abi, contractAddress)
    // 获取交易计数，即nonce
    let nonce: number = await web3.eth.getTransactionCount(account)
    const createEnergy = (name: string, symbol: string, decimals: number, total: number) => {
        // 创建交易对象
        const txObject = {
            nonce: web3.utils.toHex(nonce),
            gasLimit: web3.utils.toHex(3000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            to: contractAddress,
            data: contract.methods.createToken(name, symbol, decimals, total).encodeABI()    //将合约函数转化为16进制表示
        }
        // 签署交易
        const tx = new Tx(txObject)
        tx.sign(pkBuffer)
        // 序列化
        const serialized = tx.serialize()
        const raw = '0x' + serialized.toString('hex')
        // 广播交易
        web3.eth.sendSignedTransaction(raw)
        nonce++
    }
    for (let i = 0; i < 30; i++) {
        const el = Mock.mock({
            name: /\w{6,11}/,
            symbol: /[A-Z]{2,4}/,
            decimals: /\d/,
            total: /[1-9]{1}\d{7,11}/
        })
        createEnergy(el.name, el.symbol, el.decimals, el.total)
    }
}
