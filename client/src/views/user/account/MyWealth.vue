<template>
    <div class="container">
        <div class="header">
            <h3 style="text-align: center;">我的资产</h3>
        </div>
        <div class="body">
            <div class="box">
                <ul>
                    <h4>
<<<<<<< HEAD
                        <it-button text type="success" @click="getInfo">积分</it-button>
=======
                        <it-button text type="success" @click="">积分</it-button>
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
                    </h4>
                </ul>
                <ul>
                    <li>
                        可用余额
                    </li>
                    <li>
<<<<<<< HEAD
                        {{ form1.value2 }}&nbsp;{{ form1.value1 }}
=======
                        1000 BTC
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
                    </li>
                </ul>
                <ul>
                    <li>
<<<<<<< HEAD
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
=======
                        <it-button text type="success" @click="">转账</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
                    </li>
                </ul>
                <hr>
                <ul>
                    <li>
<<<<<<< HEAD
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
=======
                        <it-button text type="success" @click="">转移能源</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
                    </li>
                </ul>
                <ul>
                    <h4>
<<<<<<< HEAD
                        <it-button text type="success" @click="submit1_">持有能源</it-button>
=======
                        <it-button text type="success" @click="">持有能源</it-button>
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>能源数量</li>
                </ul>
<<<<<<< HEAD
                <template v-for="(item, index) in balance" :key="index">
                    <ul>
                        <li> {{ item.symbol }} </li>
                        <li> {{ item.count }} </li>
=======
                <template v-for="item in 7">
                    <ul>
                        <li>name</li>
                        <li>count</li>
>>>>>>> 2a6f374c26c99824cd39f72d1558229d1f902a86
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
                        <it-button text type="success" @click="">出售</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="">取消出售</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="index" />
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="">交易记录</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>数量</li>
                    <li>价格</li>
                </ul>
                <template v-for="item in 7">
                    <ul>
                        <li>ivil</li>
                        <li>1</li>
                        <li>10000</li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { symbol, balanceOf, totalSupply, transfer, transferToken, getAllTokensInfo, getTokenBalance } from '@/web3/user.api'
import { reactive, ref } from 'vue';

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
    getTokenBalance("IVIL").then(value=>{
        console.log(value);
    })
    balance.value = []
    // getAllTokensInfo().then(value => {
    //     console.log(value);
    //     value.forEach((el: any) => {
    //         let token = {
    //             symbol: '',
    //             count: ''
    //         }
    //         token.symbol = el.symbol;
    //         getTokenBalance(el.symbol).then(value => {
    //             console.log(value);
    //             token.count = value
    //             balance.value.push(token)
    //         })
    //     });
    // })
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