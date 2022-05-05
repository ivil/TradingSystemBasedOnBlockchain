// 组件外直接引入store，组件外使用useStore组合API得到的是undefined，这个时候还没挂载到vue上去
import store from '@/store'
// 合约部署之后会将合约地址存入Vuex，此处就会同步更新
const address = sessionStorage.getItem('contractAddress') || store.state.contractAddress

const Contract = {
    TradingSystem: {
        // address:'',
        address,
        abi: [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "createIVIL",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint8",
                        "name": "decimals",
                        "type": "uint8"
                    },
                    {
                        "internalType": "uint256",
                        "name": "total",
                        "type": "uint256"
                    }
                ],
                "name": "createToken",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint8",
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "totalSupply",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IvilWorld.Token[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "destoryIVIL",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    }
                ],
                "name": "destoryToken",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint8",
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "totalSupply",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IvilWorld.Token[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getAllTokensInfo",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint8",
                                "name": "decimals",
                                "type": "uint8"
                            },
                            {
                                "internalType": "uint256",
                                "name": "totalSupply",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct IvilWorld.Token[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "who",
                        "type": "address"
                    }
                ],
                "name": "getTokenBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "increaseToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "transferToken",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "depthOfPool",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "transactionsOfPool",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "status",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct TradingSystem.Transaction[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [],
                "name": "getPersonalPool",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "address",
                                "name": "sender",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "value",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "status",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "index",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct TradingSystem.Transaction[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function",
                "constant": true
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    }
                ],
                "name": "sell",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "cancelSell",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "index",
                        "type": "uint256"
                    }
                ],
                "name": "buy",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        bytecode: "0x60806040526040518060400160405280600a81526020017f6976696c2e776f726c64000000000000000000000000000000000000000000008152506000908051906020019062000051929190620004fd565b506040518060400160405280600481526020017f4956494c00000000000000000000000000000000000000000000000000000000815250600190805190602001906200009f929190620004fd565b506000600260006101000a81548160ff021916908360ff1602179055506301406f4060035560405180608001604052806040518060400160405280600a81526020017f6976696c2e776f726c640000000000000000000000000000000000000000000081525081526020016040518060400160405280600481526020017f4956494c000000000000000000000000000000000000000000000000000000008152508152602001600960ff1681526020016301406f40815250600b600082015181600001908051906020019062000177929190620004fd565b50602082015181600101908051906020019062000196929190620004fd565b5060408201518160020160006101000a81548160ff021916908360ff1602179055506060820151816003015550506000601155348015620001d657600080fd5b5033600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000273600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620004d260201b620039571790919060201c565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a600b908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201816000019080546200033a9062000674565b620003479291906200058e565b5060018201816001019080546200035e9062000674565b6200036b9291906200058e565b506002820160009054906101000a900460ff168160020160006101000a81548160ff021916908360ff16021790555060038201548160030155505062000426600b60030154600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b60010160405162000403919062000755565b908152602001604051809103902054620004d260201b620039571790919060201c565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b60010160405162000479919062000755565b90815260200160405180910390208190555033601260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000804565b6000808284620004e39190620007a7565b905083811015620004f357600080fd5b8091505092915050565b8280546200050b9062000674565b90600052602060002090601f0160209004810192826200052f57600085556200057b565b82601f106200054a57805160ff19168380011785556200057b565b828001600101855582156200057b579182015b828111156200057a5782518255916020019190600101906200055d565b5b5090506200058a919062000626565b5090565b8280546200059c9062000674565b90600052602060002090601f016020900481019282620005c0576000855562000613565b82601f10620005d3578054855562000613565b828001600101855582156200061357600052602060002091601f016020900482015b8281111562000612578254825591600101919060010190620005f5565b5b50905062000622919062000626565b5090565b5b808211156200064157600081600090555060010162000627565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200068d57607f821691505b60208210811415620006a457620006a362000645565b5b50919050565b600081905092915050565b60008190508160005260206000209050919050565b60008154620006d98162000674565b620006e58186620006aa565b9450600182166000811462000703576001811462000715576200074c565b60ff198316865281860193506200074c565b6200072085620006b5565b60005b83811015620007445781548189015260018201915060208101905062000723565b838801955050505b50505092915050565b6000620007638284620006ca565b915081905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620007b4826200076e565b9150620007c1836200076e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620007f957620007f862000778565b5b828201905092915050565b61566380620008146000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806370a08231116100c3578063c5d590161161007c578063c5d5901614610417578063c8f956a614610433578063d6ea49d71461044f578063d96a094a1461046d578063dd62ed3e14610489578063ee91035e146104b957610158565b806370a082311461031b5780639293848c1461034b57806395d89b411461037b5780639a24a25b14610399578063a9059cbb146103b7578063bc43c020146103e757610158565b8063210f5dda11610115578063210f5dda1461023157806323b872dd14610261578063313ce567146102915780633cdb9762146102af57806341f0bd67146102df57806356673fdd146102fd57610158565b806304804ee81461015d57806306fdde031461017957806307c9cd4514610197578063095ea7b3146101b35780630bb5a4e0146101e357806318160ddd14610213575b600080fd5b610177600480360381019061017291906145a3565b6104e9565b005b610181610792565b60405161018e919061469a565b60405180910390f35b6101b160048036038101906101ac91906146bc565b610824565b005b6101cd60048036038101906101c89190614747565b610b08565b6040516101da91906147a2565b60405180910390f35b6101fd60048036038101906101f891906146bc565b610c33565b60405161020a91906147a2565b60405180910390f35b61021b610e00565b60405161022891906147cc565b60405180910390f35b61024b60048036038101906102469190614820565b610e0a565b6040516102589190614a53565b60405180910390f35b61027b60048036038101906102769190614a75565b61157d565b60405161028891906147a2565b60405180910390f35b610299611937565b6040516102a69190614ad7565b60405180910390f35b6102c960048036038101906102c49190614af2565b61194e565b6040516102d691906147cc565b60405180910390f35b6102e76119bf565b6040516102f49190614cb7565b60405180910390f35b610305611b7c565b6040516103129190614cb7565b60405180910390f35b61033560048036038101906103309190614cd9565b611cfc565b60405161034291906147cc565b60405180910390f35b610365600480360381019061036091906146bc565b611d45565b60405161037291906147a2565b60405180910390f35b610383611e90565b604051610390919061469a565b60405180910390f35b6103a1611f22565b6040516103ae9190614a53565b60405180910390f35b6103d160048036038101906103cc9190614747565b6120cc565b6040516103de91906147a2565b60405180910390f35b61040160048036038101906103fc9190614d06565b6122ed565b60405161040e9190614a53565b60405180910390f35b610431600480360381019061042c9190614d4f565b612c71565b005b61044d60048036038101906104489190614d4f565b612e42565b005b6104576130b1565b60405161046491906147cc565b60405180910390f35b610487600480360381019061048291906146bc565b6130bb565b005b6104a3600480360381019061049e9190614dab565b613633565b6040516104b091906147cc565b60405180910390f35b6104d360048036038101906104ce9190614deb565b6136ba565b6040516104e091906147a2565b60405180910390f35b6104f28361397f565b50506104fe833361194e565b821115610540576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053790614ea6565b60405180910390fd5b60006040518060c001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020018381526020016000151581526020016011548152509050600f81908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061061b92919061422c565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a082015181600501555050601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906006020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101908051906020019061072892919061422c565b50604082015181600201556060820151816003015560808201518160040160006101000a81548160ff02191690831515021790555060a0820151816005015550506107738484613ac6565b506011600081548092919061078790614ef5565b919050555050505050565b6060600080546107a190614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546107cd90614f6d565b801561081a5780601f106107ef5761010080835404028352916020019161081a565b820191906000526020600020905b8154815290600101906020018083116107fd57829003601f168201915b5050505050905090565b601154811115610869576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086090614feb565b60405180910390fd5b60001515600f82815481106108815761088061500b565b5b906000526020600020906006020160040160009054906101000a900460ff161515146108e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d9906150ac565b60405180910390fd5b600f81815481106108f6576108f561500b565b5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461095f57600080fd5b610a3b600f82815481106109765761097561500b565b5b9060005260206000209060060201600101805461099290614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546109be90614f6d565b8015610a0b5780601f106109e057610100808354040283529160200191610a0b565b820191906000526020600020905b8154815290600101906020018083116109ee57829003601f168201915b5050505050600f8381548110610a2457610a2361500b565b5b906000526020600020906006020160020154613d8e565b506001600f8281548110610a5257610a5161500b565b5b906000526020600020906006020160040160006101000a81548160ff0219169083151502179055506000610a86823361400a565b5090506001601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610adc57610adb61500b565b5b906000526020600020906006020160040160006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b4357600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610c2191906147cc565b60405180910390a36001905092915050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610cc5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cbc90615118565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610d47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3e90615184565b60405180910390fd5b610d9982600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461413590919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610df18260035461413590919063ffffffff16565b60038190555060019050919050565b6000600354905090565b6060600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e93906151f0565b60405180910390fd5b6000805b600a8054905081101561123857610f6d87600a8381548110610ec557610ec461500b565b5b90600052602060002090600402016000018054610ee190614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0d90614f6d565b8015610f5a5780601f10610f2f57610100808354040283529160200191610f5a565b820191906000526020600020905b815481529060010190602001808311610f3d57829003601f168201915b505050505061415e90919063ffffffff16565b80611034575061103386600a8381548110610f8b57610f8a61500b565b5b90600052602060002090600402016001018054610fa790614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054610fd390614f6d565b80156110205780601f10610ff557610100808354040283529160200191611020565b820191906000526020600020905b81548152906001019060200180831161100357829003601f168201915b505050505061415e90919063ffffffff16565b5b156112255781611079576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611070906152a8565b60405180910390fd5b600a805480602002602001604051908101604052809291908181526020016000905b8282101561121857838290600052602060002090600402016040518060800160405290816000820180546110ce90614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546110fa90614f6d565b80156111475780601f1061111c57610100808354040283529160200191611147565b820191906000526020600020905b81548152906001019060200180831161112a57829003601f168201915b5050505050815260200160018201805461116090614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461118c90614f6d565b80156111d95780601f106111ae576101008083540402835291602001916111d9565b820191906000526020600020905b8154815290600101906020018083116111bc57829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff1681526020016003820154815250508152602001906001019061109b565b5050505092505050611575565b808061123090614ef5565b915050610ea0565b50600060405180608001604052808881526020018781526020018660ff168152602001858152509050600a81908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000190805190602001906112a992919061422c565b5060208201518160010190805190602001906112c692919061422c565b5060408201518160020160006101000a81548160ff021916908360ff16021790555060608201518160030155505061136a8160600151600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020836020015160405161134d9190615304565b90815260200160405180910390205461395790919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082602001516040516113bb9190615304565b908152602001604051809103902081905550600a805480602002602001604051908101604052809291908181526020016000905b8282101561156c578382906000526020600020906004020160405180608001604052908160008201805461142290614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461144e90614f6d565b801561149b5780601f106114705761010080835404028352916020019161149b565b820191906000526020600020905b81548152906001019060200180831161147e57829003601f168201915b505050505081526020016001820180546114b490614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546114e090614f6d565b801561152d5780601f106115025761010080835404028352916020019161152d565b820191906000526020600020905b81548152906001019060200180831161151057829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff168152602001600382015481525050815260200190600101906113ef565b50505050925050505b949350505050565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156115cb57600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561165457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561168e57600080fd5b6116e082600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461413590919063ffffffff16565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061177582600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461395790919063ffffffff16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061184782600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461413590919063ffffffff16565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161192491906147cc565b60405180910390a3600190509392505050565b6000600260009054906101000a900460ff16905090565b60006119598361397f565b5050600960008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020836040516119a89190615304565b908152602001604051809103902054905092915050565b6060601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611b7357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611aa990614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054611ad590614f6d565b8015611b225780601f10611af757610100808354040283529160200191611b22565b820191906000526020600020905b815481529060010190602001808311611b0557829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815260200160058201548152505081526020019060010190611a20565b50505050905090565b6060600f805480602002602001604051908101604052809291908181526020016000905b82821015611cf357838290600052602060002090600602016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611c2990614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054611c5590614f6d565b8015611ca25780601f10611c7757610100808354040283529160200191611ca2565b820191906000526020600020905b815481529060010190602001808311611c8557829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900460ff1615151515815260200160058201548152505081526020019060010190611ba0565b50505050905090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611dd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dce90615367565b60405180910390fd5b611e2982600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461395790919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611e818260035461395790919063ffffffff16565b60038190555060019050919050565b606060018054611e9f90614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054611ecb90614f6d565b8015611f185780601f10611eed57610100808354040283529160200191611f18565b820191906000526020600020905b815481529060010190602001808311611efb57829003601f168201915b5050505050905090565b6060600a805480602002602001604051908101604052809291908181526020016000905b828210156120c35783829060005260206000209060040201604051806080016040529081600082018054611f7990614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054611fa590614f6d565b8015611ff25780601f10611fc757610100808354040283529160200191611ff2565b820191906000526020600020905b815481529060010190602001808311611fd557829003601f168201915b5050505050815260200160018201805461200b90614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461203790614f6d565b80156120845780601f1061205957610100808354040283529160200191612084565b820191906000526020600020905b81548152906001019060200180831161206757829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff16815260200160038201548152505081526020019060010190611f46565b50505050905090565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561211a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561215457600080fd5b6121a682600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461413590919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061223b82600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461395790919063ffffffff16565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516122db91906147cc565b60405180910390a36001905092915050565b6060600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461237f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612376906151f0565b60405180910390fd5b6123c76040518060400160405280600481526020017f4956494c000000000000000000000000000000000000000000000000000000008152508361415e90919063ffffffff16565b15612407576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123fe906153d3565b60405180910390fd5b6000805b600a80549050811015612a84576124d884600a83815481106124305761242f61500b565b5b9060005260206000209060040201600101805461244c90614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461247890614f6d565b80156124c55780601f1061249a576101008083540402835291602001916124c5565b820191906000526020600020905b8154815290600101906020018083116124a857829003601f168201915b505050505061415e90919063ffffffff16565b15612a7157600a81815481106124f1576124f061500b565b5b90600052602060002090600402016000808201600061251091906142b2565b60018201600061252091906142b2565b6002820160006101000a81549060ff0219169055600382016000905550505b600a8054905060018261255291906153f3565b101561263657600a60018261256791906153f3565b815481106125785761257761500b565b5b9060005260206000209060040201600a828154811061259a5761259961500b565b5b906000526020600020906004020160008201816000019080546125bc90614f6d565b6125c79291906142f2565b5060018201816001019080546125dc90614f6d565b6125e79291906142f2565b506002820160009054906101000a900460ff168160020160006101000a81548160ff021916908360ff16021790555060038201548160030155905050808061262e90614ef5565b91505061253f565b6060600a805480602002602001604051908101604052809291908181526020016000905b828210156127d7578382906000526020600020906004020160405180608001604052908160008201805461268d90614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546126b990614f6d565b80156127065780601f106126db57610100808354040283529160200191612706565b820191906000526020600020905b8154815290600101906020018083116126e957829003601f168201915b5050505050815260200160018201805461271f90614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461274b90614f6d565b80156127985780601f1061276d57610100808354040283529160200191612798565b820191906000526020600020905b81548152906001019060200180831161277b57829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff1681526020016003820154815250508152602001906001019061265a565b505050509050600a60006127eb919061437f565b60005b600182516127fc9190615449565b8110156128c357600a8282815181106128185761281761500b565b5b60200260200101519080600181540180825580915050600190039060005260206000209060040201600090919091909150600082015181600001908051906020019061286592919061422c565b50602082015181600101908051906020019061288292919061422c565b5060408201518160020160006101000a81548160ff021916908360ff16021790555060608201518160030155505080806128bb90614ef5565b9150506127ee565b50600a805480602002602001604051908101604052809291908181526020016000905b82821015612a63578382906000526020600020906004020160405180608001604052908160008201805461291990614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461294590614f6d565b80156129925780601f1061296757610100808354040283529160200191612992565b820191906000526020600020905b81548152906001019060200180831161297557829003601f168201915b505050505081526020016001820180546129ab90614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546129d790614f6d565b8015612a245780601f106129f957610100808354040283529160200191612a24565b820191906000526020600020905b815481529060010190602001808311612a0757829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff168152602001600382015481525050815260200190600101906128e6565b505050509350505050612c6c565b8080612a7c90614ef5565b91505061240b565b5080612ac5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612abc906154c9565b60405180910390fd5b600a805480602002602001604051908101604052809291908181526020016000905b82821015612c645783829060005260206000209060040201604051806080016040529081600082018054612b1a90614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054612b4690614f6d565b8015612b935780601f10612b6857610100808354040283529160200191612b93565b820191906000526020600020905b815481529060010190602001808311612b7657829003601f168201915b50505050508152602001600182018054612bac90614f6d565b80601f0160208091040260200160405190810160405280929190818152602001828054612bd890614f6d565b8015612c255780601f10612bfa57610100808354040283529160200191612c25565b820191906000526020600020905b815481529060010190602001808311612c0857829003601f168201915b505050505081526020016002820160009054906101000a900460ff1660ff1660ff16815260200160038201548152505081526020019060010190612ae7565b505050509150505b919050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612d01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612cf890615535565b60405180910390fd5b6000612d0c8361397f565b509050612d4782600a8381548110612d2757612d2661500b565b5b90600052602060002090600402016003015461395790919063ffffffff16565b600a8281548110612d5b57612d5a61500b565b5b906000526020600020906004020160030181905550612dde82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085604051612dc19190615304565b90815260200160405180910390205461395790919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051612e2b9190615304565b908152602001604051809103902081905550505050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612ed2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612ec990615535565b60405180910390fd5b6000612edd8361397f565b50905081600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051612f2e9190615304565b9081526020016040518091039020541015612f7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f7590615184565b60405180910390fd5b612fb682600a8381548110612f9657612f9561500b565b5b90600052602060002090600402016003015461413590919063ffffffff16565b600a8281548110612fca57612fc961500b565b5b90600052602060002090600402016003018190555061304d82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020856040516130309190615304565b90815260200160405180910390205461413590919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208460405161309a9190615304565b908152602001604051809103902081905550505050565b6000601154905090565b3373ffffffffffffffffffffffffffffffffffffffff16600f82815481106130e6576130e561500b565b5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561316f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613166906155a1565b60405180910390fd5b6011548111156131b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016131ab90614feb565b60405180910390fd5b60001515600f82815481106131cc576131cb61500b565b5b906000526020600020906006020160040160009054906101000a900460ff1615151461322d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613224906150ac565b60405180910390fd5b6132a1600f82815481106132445761324361500b565b5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600f838154811061328a5761328961500b565b5b9060005260206000209060060201600301546120cc565b5061337e600f82815481106132b9576132b861500b565b5b906000526020600020906006020160010180546132d590614f6d565b80601f016020809104026020016040519081016040528092919081815260200182805461330190614f6d565b801561334e5780601f106133235761010080835404028352916020019161334e565b820191906000526020600020905b81548152906001019060200180831161333157829003601f168201915b5050505050600f83815481106133675761336661500b565b5b906000526020600020906006020160020154613d8e565b506001600f82815481106133955761339461500b565b5b906000526020600020906006020160040160006101000a81548160ff021916908315150217905550601060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600f82815481106134105761340f61500b565b5b906000526020600020906006020190806001815401808255809150506001900390600052602060002090600602016000909190919091506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201816001019080546134c290614f6d565b6134cd9291906142f2565b5060028201548160020155600382015481600301556004820160009054906101000a900460ff168160040160006101000a81548160ff021916908315150217905550600582015481600501555050600061356c82600f84815481106135355761353461500b565b5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661400a565b509050600160106000600f85815481106135895761358861500b565b5b906000526020600020906006020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106136075761360661500b565b5b906000526020600020906006020160040160006101000a81548160ff0219169083151502179055505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006136c58461397f565b50506136d1843361194e565b821115613713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161370a90614ea6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561374d57600080fd5b6137bb82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660405161379e9190615304565b90815260200160405180910390205461413590919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020856040516138089190615304565b90815260200160405180910390208190555061388882600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208660405161386b9190615304565b90815260200160405180910390205461395790919063ffffffff16565b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020856040516138d59190615304565b9081526020016040518091039020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161394491906147cc565b60405180910390a3600190509392505050565b600080828461396691906153f3565b90508381101561397557600080fd5b8091505092915050565b60008060005b600a80549050811015613a7757613a5284600a83815481106139aa576139a961500b565b5b906000526020600020906004020160010180546139c690614f6d565b80601f01602080910402602001604051908101604052809291908181526020018280546139f290614f6d565b8015613a3f5780601f10613a1457610100808354040283529160200191613a3f565b820191906000526020600020905b815481529060010190602001808311613a2257829003601f168201915b505050505061415e90919063ffffffff16565b15613a64578060019250925050613ac1565b8080613a6f90614ef5565b915050613985565b506000613ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613ab09061560d565b60405180910390fd5b600080915091505b915091565b6000613ad18361397f565b5050613add833361194e565b821115613b1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613b1690614ea6565b60405180910390fd5b613b8d82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085604051613b709190615304565b90815260200160405180910390205461413590919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051613bda9190615304565b908152602001604051809103902081905550613c7c8260096000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085604051613c5f9190615304565b90815260200160405180910390205461395790919063ffffffff16565b60096000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051613ceb9190615304565b908152602001604051809103902081905550600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051613d7c91906147cc565b60405180910390a36001905092915050565b6000613d998361397f565b5050613e2b8260096000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085604051613e0e9190615304565b90815260200160405180910390205461413590919063ffffffff16565b60096000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051613e9a9190615304565b908152602001604051809103902081905550613f1a82600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002085604051613efd9190615304565b90815260200160405180910390205461395790919063ffffffff16565b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084604051613f679190615304565b9081526020016040518091039020819055503373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051613ff891906147cc565b60405180910390a36001905092915050565b60008060005b601060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156140e45784601060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106140ac576140ab61500b565b5b90600052602060002090600602016005015414156140d157806001925092505061412e565b80806140dc90614ef5565b915050614010565b506000614126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161411d90614feb565b60405180910390fd5b600080915091505b9250929050565b60008282111561414457600080fd5b600082846141529190615449565b90508091505092915050565b600081518351146141725760009050614226565b60005b8351811015614220578281815181106141915761419061500b565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168482815181106141d1576141d061500b565b5b602001015160f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461420d576000915050614226565b808061421890614ef5565b915050614175565b50600190505b92915050565b82805461423890614f6d565b90600052602060002090601f01602090048101928261425a57600085556142a1565b82601f1061427357805160ff19168380011785556142a1565b828001600101855582156142a1579182015b828111156142a0578251825591602001919060010190614285565b5b5090506142ae91906143a3565b5090565b5080546142be90614f6d565b6000825580601f106142d057506142ef565b601f0160209004906000526020600020908101906142ee91906143a3565b5b50565b8280546142fe90614f6d565b90600052602060002090601f016020900481019282614320576000855561436e565b82601f10614331578054855561436e565b8280016001018555821561436e57600052602060002091601f016020900482015b8281111561436d578254825591600101919060010190614352565b5b50905061437b91906143a3565b5090565b50805460008255600402906000526020600020908101906143a091906143c0565b50565b5b808211156143bc5760008160009055506001016143a4565b5090565b5b8082111561440f57600080820160006143da91906142b2565b6001820160006143ea91906142b2565b6002820160006101000a81549060ff02191690556003820160009055506004016143c1565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61447a82614431565b810181811067ffffffffffffffff8211171561449957614498614442565b5b80604052505050565b60006144ac614413565b90506144b88282614471565b919050565b600067ffffffffffffffff8211156144d8576144d7614442565b5b6144e182614431565b9050602081019050919050565b82818337600083830152505050565b600061451061450b846144bd565b6144a2565b90508281526020810184848401111561452c5761452b61442c565b5b6145378482856144ee565b509392505050565b600082601f83011261455457614553614427565b5b81356145648482602086016144fd565b91505092915050565b6000819050919050565b6145808161456d565b811461458b57600080fd5b50565b60008135905061459d81614577565b92915050565b6000806000606084860312156145bc576145bb61441d565b5b600084013567ffffffffffffffff8111156145da576145d9614422565b5b6145e68682870161453f565b93505060206145f78682870161458e565b92505060406146088682870161458e565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b8381101561464c578082015181840152602081019050614631565b8381111561465b576000848401525b50505050565b600061466c82614612565b614676818561461d565b935061468681856020860161462e565b61468f81614431565b840191505092915050565b600060208201905081810360008301526146b48184614661565b905092915050565b6000602082840312156146d2576146d161441d565b5b60006146e08482850161458e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000614714826146e9565b9050919050565b61472481614709565b811461472f57600080fd5b50565b6000813590506147418161471b565b92915050565b6000806040838503121561475e5761475d61441d565b5b600061476c85828601614732565b925050602061477d8582860161458e565b9150509250929050565b60008115159050919050565b61479c81614787565b82525050565b60006020820190506147b76000830184614793565b92915050565b6147c68161456d565b82525050565b60006020820190506147e160008301846147bd565b92915050565b600060ff82169050919050565b6147fd816147e7565b811461480857600080fd5b50565b60008135905061481a816147f4565b92915050565b6000806000806080858703121561483a5761483961441d565b5b600085013567ffffffffffffffff81111561485857614857614422565b5b6148648782880161453f565b945050602085013567ffffffffffffffff81111561488557614884614422565b5b6148918782880161453f565b93505060406148a28782880161480b565b92505060606148b38782880161458e565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061490782614612565b61491181856148eb565b935061492181856020860161462e565b61492a81614431565b840191505092915050565b61493e816147e7565b82525050565b61494d8161456d565b82525050565b6000608083016000830151848203600086015261497082826148fc565b9150506020830151848203602086015261498a82826148fc565b915050604083015161499f6040860182614935565b5060608301516149b26060860182614944565b508091505092915050565b60006149c98383614953565b905092915050565b6000602082019050919050565b60006149e9826148bf565b6149f381856148ca565b935083602082028501614a05856148db565b8060005b85811015614a415784840389528151614a2285826149bd565b9450614a2d836149d1565b925060208a01995050600181019050614a09565b50829750879550505050505092915050565b60006020820190508181036000830152614a6d81846149de565b905092915050565b600080600060608486031215614a8e57614a8d61441d565b5b6000614a9c86828701614732565b9350506020614aad86828701614732565b9250506040614abe8682870161458e565b9150509250925092565b614ad1816147e7565b82525050565b6000602082019050614aec6000830184614ac8565b92915050565b60008060408385031215614b0957614b0861441d565b5b600083013567ffffffffffffffff811115614b2757614b26614422565b5b614b338582860161453f565b9250506020614b4485828601614732565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b614b8381614709565b82525050565b614b9281614787565b82525050565b600060c083016000830151614bb06000860182614b7a565b5060208301518482036020860152614bc882826148fc565b9150506040830151614bdd6040860182614944565b506060830151614bf06060860182614944565b506080830151614c036080860182614b89565b5060a0830151614c1660a0860182614944565b508091505092915050565b6000614c2d8383614b98565b905092915050565b6000602082019050919050565b6000614c4d82614b4e565b614c578185614b59565b935083602082028501614c6985614b6a565b8060005b85811015614ca55784840389528151614c868582614c21565b9450614c9183614c35565b925060208a01995050600181019050614c6d565b50829750879550505050505092915050565b60006020820190508181036000830152614cd18184614c42565b905092915050565b600060208284031215614cef57614cee61441d565b5b6000614cfd84828501614732565b91505092915050565b600060208284031215614d1c57614d1b61441d565b5b600082013567ffffffffffffffff811115614d3a57614d39614422565b5b614d468482850161453f565b91505092915050565b60008060408385031215614d6657614d6561441d565b5b600083013567ffffffffffffffff811115614d8457614d83614422565b5b614d908582860161453f565b9250506020614da18582860161458e565b9150509250929050565b60008060408385031215614dc257614dc161441d565b5b6000614dd085828601614732565b9250506020614de185828601614732565b9150509250929050565b600080600060608486031215614e0457614e0361441d565b5b600084013567ffffffffffffffff811115614e2257614e21614422565b5b614e2e8682870161453f565b9350506020614e3f86828701614732565b9250506040614e508682870161458e565b9150509250925092565b7f54686520746f6b656e206973206e6f7420656e6f756768202100000000000000600082015250565b6000614e9060198361461d565b9150614e9b82614e5a565b602082019050919050565b60006020820190508181036000830152614ebf81614e83565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614f008261456d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415614f3357614f32614ec6565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680614f8557607f821691505b60208210811415614f9957614f98614f3e565b5b50919050565b7f546865207472616e73616374696f6e206973206e6f7420657869737465642021600082015250565b6000614fd560208361461d565b9150614fe082614f9f565b602082019050919050565b6000602082019050818103600083015261500481614fc8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f546865207472616e73616374696f6e2068617320616c7265616479206265656e60008201527f20636f6d706c6574656420210000000000000000000000000000000000000000602082015250565b6000615096602c8361461d565b91506150a18261503a565b604082019050919050565b600060208201905081810360008301526150c581615089565b9050919050565b7f4f6e6c792074686520726f6f742063616e20646573746f727920746f6b656e21600082015250565b600061510260208361461d565b915061510d826150cc565b602082019050919050565b60006020820190508181036000830152615131816150f5565b9050919050565b7f496e73756666696369656e742062616c616e6365202100000000000000000000600082015250565b600061516e60168361461d565b915061517982615138565b602082019050919050565b6000602082019050818103600083015261519d81615161565b9050919050565b7f4f6e6c7920726f6f742063616e206372656174652074686520746f6b656e2021600082015250565b60006151da60208361461d565b91506151e5826151a4565b602082019050919050565b60006020820190508181036000830152615209816151cd565b9050919050565b7f6661696c656420746f2063726561746520746f6b656e202120546865206e616d60008201527f65206f722073796d626f6c2068617320616c726561647920657869737465642060208201527f2100000000000000000000000000000000000000000000000000000000000000604082015250565b600061529260418361461d565b915061529d82615210565b606082019050919050565b600060208201905081810360008301526152c181615285565b9050919050565b600081905092915050565b60006152de82614612565b6152e881856152c8565b93506152f881856020860161462e565b80840191505092915050565b600061531082846152d3565b915081905092915050565b7f4f6e6c792074686520726f6f742063616e2063726561746520746f6b656e2100600082015250565b6000615351601f8361461d565b915061535c8261531b565b602082019050919050565b6000602082019050818103600083015261538081615344565b9050919050565b7f546865204956494c2069732063616e277420626520646573746f727965642021600082015250565b60006153bd60208361461d565b91506153c882615387565b602082019050919050565b600060208201905081810360008301526153ec816153b0565b9050919050565b60006153fe8261456d565b91506154098361456d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561543e5761543d614ec6565b5b828201905092915050565b60006154548261456d565b915061545f8361456d565b92508282101561547257615471614ec6565b5b828203905092915050565b7f6661696c656420746f2064656c65746520210000000000000000000000000000600082015250565b60006154b360128361461d565b91506154be8261547d565b602082019050919050565b600060208201905081810360008301526154e2816154a6565b9050919050565b7f4f6e6c7920726f6f742063616e206164642074686520746f6b656e2021000000600082015250565b600061551f601d8361461d565b915061552a826154e9565b602082019050919050565b6000602082019050818103600083015261554e81615512565b9050919050565b7f596f752063616e206e6f742062757920796f75722070726f6475637420210000600082015250565b600061558b601e8361461d565b915061559682615555565b602082019050919050565b600060208201905081810360008301526155ba8161557e565b9050919050565b7f54686520746f6b656e20776173206e6f7420666f756e64202100000000000000600082015250565b60006155f760198361461d565b9150615602826155c1565b602082019050919050565b60006020820190508181036000830152615626816155ea565b905091905056fea2646970667358221220140deae9a97c67fb074641d6c46e57d88b65c315dbf7861020fca741f8c8c6cd64736f6c634300080c0033",
    },
}

export default Contract