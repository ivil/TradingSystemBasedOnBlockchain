<template>
    <h3 style="text-align: center;width: 97vw;">管理系统</h3>
    <div class="container">
        <div class="box">
            <h3>生态积分管理</h3>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit1_1">发行积分</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input v-model="form1.value1" status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit1_2">销毁积分</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input v-model="form1.value2" status="success" placeholder="value" />
                </li>
            </ul>
            <ul>
                <it-button @click="migrate">test</it-button>
            </ul>
        </div>
        <div class="box">
            <h3>能源创建</h3>
            <br>
            <ul>
                <li>
                    <it-input v-model="form2.name" status="success" placeholder="name" />
                </li>
                <li>
                    <it-input v-model="form2.symbol" status="success" placeholder="symbol" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-input v-model="form2.decimals" status="success" placeholder="decimals" />
                </li>
                <li>
                    <it-input v-model="form2.total" status="success" placeholder="total" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit2_1">铸造能源</it-button>
                </li>
            </ul>
            <br>
            <br>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit2_2">销毁能源</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input v-model="value_1" status="success" placeholder="symbol" />
                </li>
            </ul>
        </div>
        <div class="box">
            <h3>能源管理</h3>
            <br>
            <ul>
                <li>
                    <it-input v-model="form3.symbol" status="success" placeholder="symbol" />
                </li>
                <li>
                    <it-input v-model="form3.value" status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit3_1">增发能源</it-button>
                </li>
            </ul>
            <br>
            <br>
            <br>
            <br>
            <ul>
                <li>
                    <it-input v-model="form4.symbol" status="success" placeholder="symbol" />
                </li>
                <li>
                    <it-input v-model="form4.value" status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="submit3_2">缩减能源</it-button>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { createIVIL, destoryIVIL, createToken, destoryToken, increaseToken, decreaseToken } from '@/web3/api/admin.api'
import migrate from '@/web3/config/Migrate'

const form1 = reactive({
    value1: 0,
    value2: 0
})
const submit1_1 = () => {
    createIVIL(form1.value1).then(value => {
        console.log(value);
    })
}
const submit1_2 = () => {
    destoryIVIL(form1.value2).then(value => {
        console.log(value);
    })
}

const form2 = reactive({
    name: '',
    symbol: '',
    decimals: 0,
    total: 0
})

const submit2_1 = () => {
    createToken(form2.name, form2.symbol, form2.decimals, form2.total).then(value => {
        console.log(value);

    })
}

const value_1 = ref('')
const submit2_2 = () => {
    destoryToken(value_1.value).then(value => {
        console.log(value);

    })
}

const form3 = reactive({
    symbol: '',
    value: 0
})
const submit3_1 = () => {
    increaseToken(form3.symbol, form3.value).then(value => {
        console.log(value);

    })
}

const form4 = reactive({
    symbol: '',
    value: 0
})
const submit3_2 = () => {
    decreaseToken(form4.symbol, form4.value).then(value => {
        console.log(value);

    })
}

</script>
    
<style lang="less" scoped>
.container {
    width: 97vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;

    h3 {
        text-align: center;
    }

    .box {
        height: 90%;
        width: 31%;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
        }
    }
}
</style>