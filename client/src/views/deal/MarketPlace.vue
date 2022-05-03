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
                        <li @click="tab = 1" class="tab">全部</li>
                    </template>
                    <template v-if="tab !== 1">
                        <li @click="tab = 1">全部</li>
                    </template>
                    <template v-if="tab === 2">
                        <li @click="tab = 2" class="tab">传统能源</li>
                    </template>
                    <template v-if="tab !== 2">
                        <li @click="tab = 2">传统能源</li>
                    </template>
                    <template v-if="tab === 3">
                        <li @click="tab = 3" class="tab">新能源</li>
                    </template>
                    <template v-if="tab !== 3">
                        <li @click="tab = 3">新能源</li>
                    </template>
                </ul>
                <div class="content">
                    <template v-if="tab === 1">
                        <div class="product" v-for="(item, index) in productList" :key="index">
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
                        <it-input status="success" />
                    </div>
                    <div class="input">
                        <div class="title">数量（XXL）</div>
                        <it-input status="success" />
                    </div>
                    <div class="input">
                        <div class="title">金额（IVIL）</div>
                        <it-input status="success" />
                    </div>
                    <it-button class="button" type="success" outlined>购买</it-button>
                </div>
                <div class="deal">
                    <div class="input">
                        <div class="title">价格（IVIL）</div>
                        <it-input status="danger" />
                    </div>
                    <div class="input">
                        <div class="title">数量（XXL）</div>
                        <it-input status="danger" />
                    </div>
                    <div class="input">
                        <div class="title">金额（IVIL）</div>
                        <it-input status="danger" />
                    </div>
                    <it-button class="button" type="danger" outlined>卖出</it-button>
                </div>
            </div>
        </div>
        <div class="market">
            <ul>
                <li @click="entrustTap = 1">全部委托</li>
                <li @click="entrustTap = 2">交易记录</li>
            </ul>
            <div class="content">
                <template v-if="entrustTap === 1">
                    <div class="transaction">
                        <span>价格</span>
                        <span>数量</span>
                        <span>合计</span>
                    </div>
                    <template v-for="(item, index) in deals" :key="index">
                        <div class="transaction">
                            <span> {{ item.price }} </span>
                            <span> {{ item.count }} </span>
                            <span> {{ item.money }} </span>
                        </div>
                    </template>
                </template>
                <template v-if="entrustTap === 2">
                    2
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import Navigation from '@/components/Navigation.vue'
import { onMounted, ref } from 'vue'

onMounted(() => {
    // created这时候还只是创建了实例，但模板还没挂载完成,因此会挂载失败导致报错
    import('@/utils/k-curve')
})

const Mock = require('mockjs')
const tab = ref(1)
const entrustTap = ref(1)

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
    "list|17-19": [
        {
            symbol: /[A-Z]{2,4}/,
            price: /\$[1-9]{1,5}/,
            rise: /(\+|\-)\d{1}\.\d{2}%/
        }
    ]
}).list


// 交易市场
const deals = ref([
    {
        price: '',
        count: '',
        money: ''
    }
])
deals.value = Mock.mock({
    "list|17-19": [
        {
            price: /\$[1-9]{1,5}/,
            count: /[1-9]{1,7}/,
            money: /[1-9]{5,9}/
        }
    ]
}).list
</script>
    
<style scoped lang="less">
.body {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    .list {
        width: 25%;
        background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);

        h3 {
            padding-top: 20px;
            padding-bottom: 10px;
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
                padding-bottom: 20px;

                .tab {
                    color: orchid;
                    font-weight: 600;
                }
            }

            .content {
                height: 500px;
                overflow-y: auto;

                .product {
                    display: flex;
                    justify-content: space-between;
                    padding: 15px 0;
                }
            }
        }
    }

    .main {
        width: 50%;
        background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);

        .graph {
            height: 350px;
            background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
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
        background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-bottom: 20px;

        }

        .content {
            height: 550px;
            overflow-y: auto;

            .transaction {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 0;

                span {
                    min-width: 20%;
                }
            }
        }
    }
}
</style>