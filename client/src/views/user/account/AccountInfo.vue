<template>
    <div class="container">
        <div class="box">
            <h3>账户信息</h3>
            <ul>
                <li>
                    余额
                </li>
                <li>
                    <span> {{tokenName}} </span>
                    <span> {{balance}} </span>
                </li>
            </ul>
            <ul>
                <it-button @click="refresh" type="success" outlined>refresh</it-button>
            </ul>
        </div>
        <div class="box">
            <h3>充值</h3>
            <ul>
                <li>付款银行卡号</li>
                <li><input type="text"></li>
            </ul>
            <ul>
                <li>收款地址</li>
                <li><input type="text"></li>
            </ul>
            <ul>
                <it-button @click="recharge" type="success" outlined>recharge</it-button>
            </ul>
            <br>
            <h3>提现</h3>
            <ul>
                <li>收款银行卡号</li>
                <li><input type="text"></li>
            </ul>
            <!-- <ul>
                <li>付款地址</li>
                <li><input type="text"></li>
            </ul> -->
            <ul>
                <it-button @click="withdraw" type="success" outlined>withdraw</it-button>
            </ul>
        </div>
        <div class="box">
            <h3>转账</h3>
            <ul>
                <li>收款地址</li>
                <li><input type="text"></li>
            </ul>
            <ul>
                <it-button @click="transfer" type="success" outlined>transfer</it-button>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import {name} from '@/web3/user.api'
import { ref } from 'vue';
const tokenName = ref('')
const balance = ref('')

const refresh = ()=>{
    name().then(value=>{
        console.log(value);
    })
}

const recharge = () => {

}

const withdraw = () => {

}

const transfer = () => {

}
</script>
    
<style lang="less" scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: whitesmoke;

    .box {
        border: 1px solid pink;
        height: 500px;
        width: 300px;
        border-radius: 10px;
        text-align: center;

        ul {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            li {
                margin-right: 5px;
            }
        }
    }
}
</style>