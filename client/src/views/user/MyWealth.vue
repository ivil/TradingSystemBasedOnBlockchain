<template>
    <Navigation />
    <div class="body">
        <div class="left">
            <div class="account">
                <div class="balance">
                    <span>可用余额:&nbsp;</span>
                    <span> {{ getBalance() }} </span>
                </div>
                <div class="deal">
                    <div class="tabs">
                        <span>
                            <it-button v-if="tab === 1" @click="tab = 1" outlined type="success">充值</it-button>
                            <it-button v-if="tab !== 1" @click="tab = 1" outlined>充值</it-button>
                        </span>
                        <span>
                            <it-button v-if="tab === 2" @click="tab = 2" outlined type="success">转账</it-button>
                            <it-button v-if="tab !== 2" @click="tab = 2" outlined>转账</it-button>
                        </span>
                    </div>
                    <div class="divider"></div>
                    <template v-if="tab === 1">
                        <div class="tabArea1">
                            <div class="QRcode"><img src="@/assets/images/accountCode.png" alt="账户二维码"></div>
                            <div class="address">
                                <div> {{ accountAddress }} </div>
                            </div>
                            <div class="tip">用钱包扫描或者复制此地址向此账户充值</div>
                        </div>
                    </template>
                    <template v-if="tab === 2">
                        <div class="tabArea2">
                            <div class="input">
                                <div class="description">转账金额</div>
                                <it-input v-model="transferData.value" status="success" placeholder="value"></it-input>
                            </div>
                            <div class="input">
                                <div class="description">对方地址</div>
                                <it-input v-model="transferData.address" status="success" placeholder="address">
                                </it-input>
                            </div>
                            <div class="input">
                                <div class="description"></div>
                                <it-button block type="success" @click="transferIVIL">发起交易</it-button>
                            </div>
                            <br>
                        </div>
                    </template>
                    <div class="divider"></div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="graph">
                <div id="pieChart" style="width: 100%;height: 600px;"></div>
            </div>
        </div>
        <div class="right">
            <ul class="Tabs">
                <li>
                    <it-button v-if="Tab === 1" @click="Tab = 1" type="primary">持仓列表</it-button>
                    <it-button v-if="Tab !== 1" @click="Tab = 1">持仓列表</it-button>
                </li>
                <li>
                    <it-button v-if="Tab === 2" @click="Tab = 2" type="primary">转移能源</it-button>
                    <it-button v-if="Tab !== 2" @click="Tab = 2">转移能源</it-button>
                </li>
            </ul>
            <div class="divider"></div>
            <template v-if="Tab === 1">
                <div class="TabArea1">
                    <div class="energy">
                        <span>
                            能源
                        </span>
                        <span> 数量 </span>
                    </div>
                    <div class="list">
                        <template v-for="(item, index) in energyList" :key="index">
                            <div class="energy">
                                <span style="display: flex;align-items: center;justify-content: center;">
                                    <img src="@/assets/logo/logo.png" alt="avator">
                                    <span> {{ item.symbol }} </span>
                                </span>
                                <span> {{ item.count }} </span>
                            </div>
                        </template>
                    </div>
                </div>
            </template>
            <template v-if="Tab === 2">
                <div class="TabArea2">
                    <div class="introduction"> {{ introduction }} </div>
                    <div class="divider"></div>
                    <br>
                    <div class="input">
                        <div class="description">能源符号</div>
                        <it-input status="success" placeholder="symbol" v-model="energyForm.symbol"></it-input>
                    </div>
                    <div class="input">
                        <div class="description">能源数量</div>
                        <it-input status="success" placeholder="value" v-model="energyForm.count"></it-input>
                    </div>
                    <div class="input">
                        <div class="description">对方地址</div>
                        <it-input status="success" placeholder="address" v-model="energyForm.address"></it-input>
                    </div>
                    <div class="input">
                        <div class="description"></div>
                        <it-button block type="success" @click="transferEnergy">发起交易</it-button>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import Navigation from '@/components/Navigation.vue'
import pieChart from '@/utils/pie-chart'
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { introduction } from '@/utils/introduction'
import { symbol, balanceOf, transfer, transferToken, getEnergyBalance } from '@/web3/user.api'
import { getAccount, listenAccountsChanged } from '@/web3/common.api'
import { stringify } from 'querystring';
// 存在自由变量的函数就是闭包
//闭包作用: 一个是前面提到的可以读取函数内部的变量，另一个就是让这些变量的值始终保持在内存中，不会在 f1 调用后被自动清除。
const Mock = require('mockjs')

const tab = ref(1)
const Tab = ref(1)
// 饼状图的数据
let pieChartData = [
    { value: 1, name: 'rose 1' },
]

pieChartData = Mock.mock({
    "list|9-11": [
        {
            // 'value|+1': 1,
            value: /[1-9]{1}/,
            name: /[A-Z]{2,4}/,
            count: /[1-9]{0,11}/
        }
    ]
}).list

onMounted(() => {
    pieChart('pieChart', pieChartData)
})

// 获取当前账户地址并监听地址变化
const accountAddress = ref('')
getAccount().then(value => {
    accountAddress.value = value
})
// 获取积分余额
const balance = reactive({
    count: '',
    symbol: ''
})
const getBalance = () => {
    symbol().then(value => {
        balance.symbol = value
    })
    balanceOf().then(value => {
        balance.count = value
    })
    return balance.count + ' ' + balance.symbol
}
// 监听账户变化
listenAccountsChanged(() => {
    getAccount().then(value => {
        accountAddress.value = value
    })
    getBalance()
    getEnergyBalance(energyList)
})

// 转账
const transferData = reactive({
    value: '',
    address: ''
})
const transferIVIL = () => {
    transfer(transferData.address, Number(transferData.value)).then(value => {
        console.log(value);
        getBalance()
    })
}

// 获取能源列表
const energyList = ref([
    {
        avator: '',
        symbol: '',
        count: ''
    }
])
getEnergyBalance(energyList)
// 数据模拟
// energyList.value = Mock.mock({
//     "list|17-19": [
//         {
//             avator: '',
//             symbol: /[A-Z]{2,4}/,
//             count: /[1-9]{1}\d{0,11}/
//         }
//     ]
// }).list

// 转移能源
const energyForm = reactive({
    symbol: '',
    count: '',
    address: ''
})
const transferEnergy = () => {
    transferToken(energyForm.symbol, energyForm.address, Number(energyForm.count)).then(value => {
        console.log(value);
        getEnergyBalance(energyList)
    })
}
</script>
    
<style scoped lang="less">
.body {
    display: flex;
    justify-content: space-between;
    min-height: calc(100vh - 60px);
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

    .left {
        width: 25%;

        .account {
            padding-top: 20px;

            .balance {
                width: 200px;
                height: 200px;
                margin: 0 auto;
                border-radius: 50%;
                border: 2px solid orchid;
                box-shadow: 0 0 10px #198cff;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .deal {
                .tabs {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding: 10px 0;
                }

                .divider {
                    width: 90%;
                    margin: 0 auto;
                    border-bottom: 2px solid #a1c4fd;
                    box-shadow: 0 5px 10px #198cff;
                }

                .tabArea1 {
                    padding: 20px;

                    .QRcode {
                        display: flex;
                        align-items: center;
                        justify-content: center;

                    }

                    .address {
                        width: 80%;
                        margin: 0 auto;
                        padding-top: 20px;

                        div {
                            background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
                            word-break: break-all;
                            text-align: center;
                            padding: 10px;
                            border-radius: 5px;
                            box-shadow: 0 0 5px whitesmoke;
                        }
                    }

                    .tip {
                        padding-top: 20px;
                        text-align: center;
                        font-weight: 100;
                    }
                }

                .tabArea2 {
                    padding: 20px;

                    .input {
                        padding-top: 10px;

                        .description {
                            padding: 10px 0;
                        }
                    }
                }
            }
        }
    }

    .main {
        width: 50%;

        .graph {
            padding-top: 10px;
        }

    }

    .right {
        width: 25%;

        .Tabs {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-top: 20px;
            padding-bottom: 10px;
        }

        .divider {
            width: 90%;
            margin: 0 auto;
            border-bottom: 2px solid #a1c4fd;
            box-shadow: 0 5px 10px #198cff;
        }

        .TabArea1 {
            .energy {
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 15px 0 15px 5px;

                span {
                    width: 30%;
                    text-align: center;

                    img {
                        width: 30px;
                        height: 30px;
                        margin-right: 10px;
                    }
                }
            }

            .list {
                overflow-y: auto;
                height: calc(100vh - 180px);
            }
        }

        .TabArea2 {
            .introduction {
                padding: 20px;
                word-break: break-all;
                line-height: 30px;
                height: 250px;
                overflow-y: auto;
            }

            .input {
                padding: 0 20px;

                .description {
                    padding: 10px 0;
                }
            }
        }
    }
}
</style>