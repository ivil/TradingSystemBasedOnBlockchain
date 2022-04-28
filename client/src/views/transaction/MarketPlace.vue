<template>
    <div class="nav">
        <span></span>
        <span></span>
        <span></span>
        <span>
            <it-button type="success" outlined @click="connectWallet">连接钱包</it-button>
        </span>
    </div>
    <div class="body">
        <div class="market">
            <ul>
                <li>商品信息</li>
                <li>价格</li>
                <li>库存</li>
                <li>描述</li>
            </ul>
            <template v-for="item in 11">
                <div>
                    <div>1</div>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
            </template>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
const Web3 = require('web3')
const connectWallet = () => {
    (window as any).ethereum.enable().then(async (value: any) => {
        console.log(value);

    }, (error: any) => {
        console.log(error);

    })
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