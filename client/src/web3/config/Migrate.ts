import Contract from '@/web3/config/contract.abi'
import adminAccount from '@/web3/config/adminAccount'
import store from '@/store'
const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction


const ByteCode = Contract.TradingSystem.bytecode

const account = adminAccount.account
const privateKey = adminAccount.privateKey
const pkBuffer = Buffer.from(privateKey, 'hex') //使用换冲区将私钥转化成二进制数据字符串，缓冲区是NodeJs的全局模块
const migrate = () => {
    const web3 = new Web3(window.ethereum)
    web3.eth.getTransactionCount(account, (err: any, txCount: any) => {
        // 创建交易对象
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            gasLimit: web3.utils.toHex(9000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
            data: ByteCode
        }

        // 在使用 2.0.0 版本的 ethereumjs-tx 包时, 如果我们不指定参数 chain, 默认会使用 mainnet，
        //  如果你要使用其它网络， 需要通过 chain 参数来指定。
        // const tx = new Tx(txObject, { chain: 'mainnet', hardfork: 'ivil.world' })
        // 签署交易
        const tx = new Tx(txObject)
        tx.sign(pkBuffer)

        const serializedTx = tx.serialize() //序列化
        const raw = '0x' + serializedTx.toString('hex')

        // 广播交易
        web3.eth.sendSignedTransaction(raw).then((value: any) => {
            console.log(value);
            sessionStorage.setItem('contractAddress', value.contractAddress)
            store.commit('setContractAddress', value.contractAddress)
        })
    })

}
export default migrate