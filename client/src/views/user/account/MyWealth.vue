<template>
    <div class="container">
        <div class="header">
            <h3 style="text-align: center;">我的资产</h3>
        </div>
        <div class="body">
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="getInfo">积分</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>
                        可用余额
                    </li>
                    <li>
                        {{ form1.value2 }}&nbsp;{{ form1.value1 }}
                    </li>
                </ul>
                <ul>
                    <li>
                        积分总发行量
                    </li>
                    <li>
                        {{ form1.value3 }}&nbsp;{{ form1.value1 }}
                    </li>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="transfer_1">转账</it-button>
                    </li>
                    <li>
                        <it-input v-model="form2.address" status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input v-model="form2.value" status="success" placeholder="value" />
                    </li>
                </ul>
                <hr>
                <ul>
                    <li>
                        <it-button text type="success" @click="transfer_2">转移能源</it-button>
                    </li>
                    <li>
                        <it-input v-model="form3.symbol" status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input v-model="form3.address" status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input v-model="form3.value" status="success" placeholder="value" />
                    </li>
                </ul>
                <ul>
                    <h4>
                        <it-button text type="success" @click="submit1_">持有能源</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>能源数量</li>
                </ul>
                <template v-for="(item, index) in balance" :key="index">
                    <ul>
                        <li> {{ item.symbol }} </li>
                        <li> {{ item.count }} </li>
                    </ul>
                </template>
            </div>
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="">出售能源</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="postProduct">出售</it-button>
                    </li>
                    <li>
                        <it-input v-model="product.symbol" status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input v-model="product.value" status="success" placeholder="value" />
                    </li>
                    <li>
                        <it-input v-model="product.price" status="success" placeholder="price" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="cancel">取消出售</it-button>
                    </li>
                    <li>
                        <it-input v-model="index" status="success" placeholder="index" />
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="getDealRecords">交易记录</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>数量</li>
                    <li>价格</li>
                    <li>状态</li>
                </ul>
                <template v-for="(item, index) in records" :key="index">
                    <ul>
                        <li> {{ item.symbol }} </li>
                        <li> {{ item.value }} </li>
                        <li> {{ item.price }} </li>
                        <li v-if="item.status === false"> <span style="color: red;">未成交</span> </li>
                        <li v-if="item.status === true"> <span style="color: green;">已成交</span> </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { sell, cancelSell, getPersonalPool } from '@/web3/market.api'
import { symbol, balanceOf, totalSupply, transfer, transferToken, getAllTokensInfo, getTokenBalance } from '@/web3/user.api'
import { reactive, ref } from 'vue';

const index = ref('')
const cancel = () => {
    cancelSell(Number(index.value)).then(value => {
        console.log(value);

    })
}

const product = reactive({
    symbol: '',
    value: 0,
    price: 0
})
const postProduct = () => {
    sell(product.symbol, product.value, product.price).then(value => {
        console.log(value);

    })
}

const records = ref([
    {
        symbol: '',
        value: 0,
        price: 0,
        status: false,
    }
])
const getDealRecords = () => {
    getPersonalPool().then(value => {
        console.log(value);
        records.value = value
    })
}

const form1 = reactive({
    value1: '',
    value2: '',
    value3: ''
})
const getInfo = () => {
    symbol().then(value => {
        form1.value1 = value
    })
    balanceOf().then(value => {
        form1.value2 = value
    })
    totalSupply().then(value => {
        form1.value3 = value
    })
}

const form2 = reactive({
    address: '',
    value: 0
})
const transfer_1 = () => {
    transfer(form2.address, form2.value).then(value => {
        console.log(value);
    })
}
const form3 = reactive({
    symbol: '',
    address: '',
    value: 0
})
const transfer_2 = () => {
    transferToken(form3.symbol, form3.address, form3.value).then(value => {
        console.log(value);

    })
}
const balance = ref([
    {
        symbol: '',
        count: ''
    }
])
const submit1_ = () => {
    balance.value = []
    getAllTokensInfo().then(value => {
        value.forEach((el: any) => {
            let token = {
                symbol: '',
                count: ''
            }
            token.symbol = el.symbol;
            getTokenBalance(el.symbol).then(value => {
                token.count = value
                balance.value.push(token)
            })
        });
    })
}
</script>
    
<style lang="less" scoped>
/deep/.it-input {
    width: 100px;
}

.container {
    .body {
        height: 90vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow: auto;

        .box {
            width: 30%;
            height: 100%;

            ul {
                display: flex;
                align-content: center;
                justify-content: space-around;
                flex-wrap: wrap;
                margin: 20px 0;
            }
        }
    }
}
</style>