const Contract = {
    TradingSystem:{
        address:"",
        abi:''
    },
    Market: {
        address: "0x36f6536a1bdd8b70cc32A9Dab106aee3BE7c6Bc6",
        abi: [
            {
                "inputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "count",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Market.Product",
                        "name": "product",
                        "type": "tuple"
                    }
                ],
                "name": "onShelf",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getProductList",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "count",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Market.Product[]",
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
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "offShelf",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "count",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Market.Product[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
    },
    Storage: {
        address: '0xbc79b1ad5062412615a432D580E5C1EF650Ec9f1',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num",
                        "type": "uint256"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "retrieve",
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
            }
        ]
    }
}

export default Contract