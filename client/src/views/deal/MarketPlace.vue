<template>
    <div class="container">
        <div class="header">
            <h3 style="text-align: center;">能源交易市场</h3>
        </div>
        <div class="body">
            <div class="market">
                <ul>
                    <li>能源名称</li>
                    <li>数量</li>
                    <li>价格</li>
                    <li>
                        点击购买
                    </li>
                </ul>
                <template v-for="(item, index) in deals" :key="index">
                    <ul v-if="index != 0">
                        <li> {{ item.symbol }} </li>
                        <li> {{ item.value }} </li>
                        <li> {{ item.price }} </li>
                        <li>
                            <it-button outlined type="success" @click="buyProduct(item.index)">购买</it-button>
                        </li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { transactionsOfPool, buy } from '@/web3/market.api'
import { ref } from 'vue';

const deals = ref([
    {
        sender: '',
        symbol: '',
        value: '',
        price: '',
        status: '',
        index: ''
    }
])

const getDeals = () => {
    transactionsOfPool().then(value => {
        console.log(value);
        deals.value = value
    })
}
getDeals()

const buyProduct = (index: any) => {
    console.log(index);
    
    buy(Number(index)).then(value => {
        console.log(value);

    })
}
</script>
    
<style lang="less" scoped>
.container {
    .body {
        .market {
            ul {
                width: 80vw;
                height: 50px;
                margin: 10px auto;
                display: flex;
                align-content: center;
                justify-content: space-around;

                li {
                    width: 20%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}
</style>