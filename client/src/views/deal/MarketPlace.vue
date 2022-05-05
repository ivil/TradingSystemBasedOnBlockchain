<template>
    <Navigation />
    <div class="body">
        <div class="list">
            <h3>市场</h3>
            <div class="search">
                <it-input prefix-icon="search" />
            </div>
            <div class="tabs">
                <ul>
                    <template v-if="tab === 1">
                        <li @click="tab = 1" class="tab-checked">全部</li>
                    </template>
                    <template v-if="tab !== 1">
                        <li @click="tab = 1" class="tab-unchecked">全部</li>
                    </template>
                    <template v-if="tab === 2">
                        <li @click="tab = 2" class="tab-checked">传统能源</li>
                    </template>
                    <template v-if="tab !== 2">
                        <li @click="tab = 2" class="tab-unchecked">传统能源</li>
                    </template>
                    <template v-if="tab === 3">
                        <li @click="tab = 3" class="tab-checked">新能源</li>
                    </template>
                    <template v-if="tab !== 3">
                        <li @click="tab = 3" class="tab-unchecked">新能源</li>
                    </template>
                </ul>
                <div class="product" style="padding-right: 20px;">
                    <span>能源</span>
                    <span>价格（IVIL）</span>
                    <span>24h涨幅</span>
                </div>
                <div class="content">
                    <template v-if="tab === 1">
                        <div class="product" v-for="(item, index) in productList" :key="index"
                            @click="chooseEnergy(item)">
                            <span> {{ item.symbol }} </span>
                            <span> {{ item.price }} </span>
                            <template v-if="/\+/.test(item.rise)">
                                <span style="color:green"> {{ item.rise }} </span>
                            </template>
                            <template v-if="/\-/.test(item.rise)">
                                <span style="color:red"> {{ item.rise }} </span>
                            </template>
                        </div>
                    </template>
                    <template v-if="tab === 2">
                        <div class="product" v-for="(item, index) in productList" :key="index">
                            2
                        </div>
                    </template>
                    <template v-if="tab === 3">
                        <div class="product" v-for="(item, index) in productList" :key="index">
                            3
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="graph">
                <div id="k-curve" style="height: 100%;width: 100%;"></div>
            </div>
            <div class="option">
                <div class="deal">
                    <div class="input">
                        <div class="title">价格（IVIL）</div>
                        <it-input v-model="buyForm.price" status="success" @keyup="calculateBuyMoney" />
                    </div>
                    <div class="input">
                        <div class="title">数量（{{ buyForm.symbol }}）</div>
                        <it-input v-model="buyForm.count" status="success" @keyup="calculateBuyMoney" />
                    </div>
                    <div class="input">
                        <div class="title">金额（IVIL）</div>
                        <it-input v-model="buyForm.money" status="success" @keyup="calculateBuyCount" />
                    </div>
                    <it-button class="button" type="success" outlined @click="submit_buy">购买</it-button>
                </div>
                <div class="deal">
                    <div class="input">
                        <div class="title">价格（IVIL）</div>
                        <it-input v-model="sellForm.price" status="danger" @keyup="calculateSellMoney" />
                    </div>
                    <div class="input">
                        <div class="title">数量（{{ sellForm.symbol }}）</div>
                        <it-input v-model="sellForm.count" status="danger" @keyup="calculateSellMoney" />
                    </div>
                    <div class="input">
                        <div class="title">金额（IVIL）</div>
                        <it-input v-model="sellForm.money" status="danger" @keyup="calculateSellCount" />
                    </div>
                    <it-button class="button" type="danger" outlined @click="submit_sell">卖出</it-button>
                </div>
            </div>
        </div>
        <div class="market">
            <h3>交易</h3>
            <ul>
                <template v-if="entrustTap === 1">
                    <li @click="entrustTap = 1" class="tab-checked">全部委托</li>
                </template>
                <template v-if="entrustTap !== 1">
                    <li @click="entrustTap = 1" class="tab-unchecked">全部委托</li>
                </template>
                <template v-if="entrustTap === 2">
                    <li @click="entrustTap = 2" class="tab-checked">交易记录</li>
                </template>
                <template v-if="entrustTap !== 2">
                    <li @click="entrustTap = 2" class="tab-unchecked">交易记录</li>
                </template>
            </ul>
            <template v-if="entrustTap === 1">
                <div class="transaction" style="padding-right: 20px;">
                    <span>能源</span>
                    <span>数量</span>
                    <span>价格(IVIL)</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;交易</span>
                </div>
            </template>
            <template v-if="entrustTap === 2">
                <div class="transaction" style="padding-right: 20px;">
                    <span>能源</span>
                    <span>数量</span>
                    <span>价格(IVIL)</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;状态</span>
                </div>
            </template>
            <div class="content">
                <template v-if="entrustTap === 1">
                    <template v-for="(item, index) in deals" :key="index">
                        <div class="transaction">
                            <span> {{ item.symbol }} </span>
                            <span> {{ item.count }} </span>
                            <span> {{ item.price }} </span>
                            <span>
                                <it-button type="primary" outlined style="background: transparent;"
                                    @click="res_sell(Number(item.index))">购买</it-button>
                            </span>
                        </div>
                    </template>
                </template>
                <template v-if="entrustTap === 2">
                    <template v-for="(item, index) in records" :key="index">
                        <div class="transaction">
                            <span> {{ item.symbol }} </span>
                            <span> {{ item.count }} </span>
                            <span> {{ item.price }} </span>
                            <template v-if="!item.status">
                                <span style="color: red;font-weight: 550;font-size: 14px;">未成交</span>
                            </template>
                            <template v-if="item.status">
                                <span style="color: green;font-weight: 550;font-size: 14px;">已成交</span>
                            </template>
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import Navigation from '@/components/Navigation.vue'
import { onMounted, reactive, ref } from 'vue'
import { post_sell, confirm_sell, getDeals, getDealReocrds } from '@/web3/market.api'
import KCurve from '@/utils/k-curve'
import { listenAccountsChanged } from '@/web3/common.api';

onMounted(() => {
    // created这时候还只是创建了实例，但模板还没挂载完成,因此会挂载失败导致报错
    // import('@/utils/k-curve')    此方法虽然不需要对K线图进行封装，但是会出现路由跳转之后再跳转回来的时候，K线图无法正常显示的问题
    KCurve('k-curve');
})

const Mock = require('mockjs')
const tab = ref(1)
const entrustTap = ref(1)   //委托

// 能源列表
const productList = ref([
    {
        symbol: '',
        price: '',
        rise: ''
    }
])

// 数据模拟
productList.value = Mock.mock({
    "list|27-39": [
        {
            // symbol: /[A-Z]{2,4}/,
            symbol: 'IVIL',
            price: /[1-9]{1,5}/,
            rise: /(\+|\-)\d{1}\.\d{2}%/
        }
    ]
}).list


// 交易市场列表
const deals = ref([
    {
        symbol: '',
        count: '',
        price: '',
        index: ''
    }
])

// 模拟交易市场数据
// deals.value = Mock.mock({
//     "list|27-39": [
//         {
//             price: /[1-9]{1,5}/,
//             count: /[1-9]{1,7}/,
//             money: /[1-9]{5,9}/
//         }
//     ]
// }).list

const sellForm = reactive({
    symbol: productList.value[0].symbol,
    price: productList.value[0].price,
    count: 0,
    money: 0
})
const buyForm = reactive({
    symbol: productList.value[0].symbol,
    price: productList.value[0].price,
    count: 0,
    money: 0
})

// 选择要交易的能源
const chooseEnergy = (item: { symbol: string, price: string, rise: string }) => {
    sellForm.symbol = item.symbol
    sellForm.price = item.price
    sellForm.count = 0
    sellForm.money = 0
    buyForm.symbol = item.symbol
    buyForm.price = item.price
    buyForm.count = 0
    buyForm.money = 0
}

// 计算买入金额
const calculateBuyMoney = () => {
    buyForm.money = Number(buyForm.price) * Number(buyForm.count)
}
// 计算买入数量
const calculateBuyCount = () => {
    buyForm.count = Number(String(Number(buyForm.money) / Number(buyForm.price)).split(".")[0])
}
// 计算卖出金额
const calculateSellMoney = () => {
    sellForm.money = Number(sellForm.price) * Number(sellForm.count)
}
// 计算卖出数量
const calculateSellCount = () => {
    sellForm.count = Number(String(Number(sellForm.money) / Number(sellForm.price)).split(".")[0])
}

// 表单提交,发布需求
const submit_buy = () => {

}
const submit_sell = () => {
    post_sell(sellForm.symbol, sellForm.count, sellForm.money).then(value => {
        console.log(value);
        refresh()
    })
}

// 响应需求
const res_buy = () => {

}
const res_sell = (index: number) => {
    confirm_sell(index).then(value => {
        console.log(value);
        refresh()
    })
}

// 获取个人交易记录
const records = ref([
    {
        symbol: '',
        count: '',
        price: '',
        status: false,
        index: ''
    }
])

// 刷新
const refresh = () => {
    getDeals(deals)
    getDealReocrds(records)
}
refresh()
listenAccountsChanged(() => {
    refresh()
})

</script>
    
<style scoped lang="less">
.body {
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

    .list {
        width: 25%;

        h3 {
            padding-top: 20px;
            padding-bottom: 10px;
            padding-left: 10px;
        }

        .search {
            padding: 10px;
        }

        .tabs {
            padding: 20px;

            ul {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-right: 15px;
                padding-bottom: 5px;

                .tab-checked {
                    color: orchid;
                    font-weight: 600;
                    padding-bottom: 10px;
                    border-bottom: 5px solid orchid;
                }

                .tab-unchecked {
                    font-weight: 600;
                    color: grey;
                    padding-bottom: 10px;
                }
            }

            .product {
                display: flex;
                justify-content: space-between;
                padding: 15px 0;
            }

            .content {
                height: 600px;
                padding-right: 15px;
                overflow-y: auto;
            }
        }
    }

    .main {
        width: 50%;

        .graph {
            height: 470px;
        }

        .option {
            // width: 100%;     添加width之后会使padding-right失效
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .deal {
                width: calc(50% - 10px);

                .input {
                    padding: 10px 0;

                    .title {
                        padding-bottom: 10px;
                    }
                }

                .button {
                    margin-top: 20px;
                    width: 100%;
                }
            }
        }
    }

    .market {
        width: 25%;
        padding: 20px;

        h3 {
            padding-bottom: 10px;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-bottom: 20px;

            .tab-checked {
                color: #198CFF;
                font-weight: 600;
                padding-bottom: 10px;
                border-bottom: 5px solid #198CFF;
            }

            .tab-unchecked {
                font-weight: 600;
                color: grey;
                padding-bottom: 10px;
            }
        }

        .transaction {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;

            span {
                min-width: 20%;
            }
        }

        .content {
            height: 600px;
            padding-right: 15px;
            overflow-y: auto;

        }
    }
}
</style>