<template>
    <div class="nav">
        <span></span>
        <span></span>
        <span>
            <it-button type="success" outlined @click="router.push('/demandsRelease')">发布商品</it-button>
        </span>
        <span>
            <it-button type="success" outlined @click="getProducts">获取当前商品列表</it-button>
        </span>
    </div>
    <div class="body">
        <div class="market">
            <ul>
                <li>商品信息</li>
                <li>价格</li>
                <li>数量</li>
                <li>描述</li>
            </ul>
            <template v-for="(item, index) in (products as lists)" :key="index">
                <div>
                    <div> {{ item.name }} </div>
                    <span> {{ item.price }} </span>
                    <span> {{ item.count }} </span>
                    <span> {{ item.description }} </span>
                </div>
            </template>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
// import { getProductList } from '@/web3/web3.api'
import { ref } from 'vue';
import router from '@/router/index'
const products = ref([])
const getProducts = async () => {
    // const value = await getProductList()
    // console.log(value);
    // products.value = value
}
</script>
    
<style lang="less" scoped>
.nav {
    height: 10vh;
    width: 100vw;
    background-color: antiquewhite;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.body {
    background-color: cornsilk;
    width: 100vw;
    height: 90vh;
    overflow: hidden;

    .market {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow-x: hidden;
        overflow-y: auto;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 50px;
            width: 80%;
            margin: 0 auto;

            li {
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;

                &:nth-child(1) {
                    width: 40%;
                }
            }
        }

        div {
            background-color: aquamarine;
            height: 100px;
            width: 80%;
            margin: 10px auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            div {
                width: 40%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            span {
                width: 20%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
</style>