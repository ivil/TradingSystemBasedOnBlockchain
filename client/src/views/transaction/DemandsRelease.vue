<template>
    <div class="demandsRelease">
        <div>
            <ul>
                <li>名称</li>
                <div class="interval"></div>
                <li><input v-model="form.name" type="text"></li>
            </ul>
            <ul>
                <li>价格</li>
                <div class="interval"></div>
                <li><input v-model="form.price" type="text"></li>
            </ul>
            <ul>
                <li>数量</li>
                <div class="interval"></div>
                <li><input v-model="form.count" type="text"></li>
            </ul>
            <ul>
                <li>描述</li>
                <div class="interval"></div>
                <li><input v-model="form.description" type="text"></li>
            </ul>
            <ul>
                <li>
                    <it-button @click="release" type="success" outlined>release</it-button>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { postProduct } from '@/web3/web3.api'
import { reactive } from 'vue';

const form = reactive({
    name: "",
    price: 0,
    count: 0,
    description: ""
})
const release = async () => {
    const value = await postProduct(form)
    console.log(value);
}

</script>
    
<style lang="less" scoped>
.interval {
    width: 10px;
}

.demandsRelease {
    background-color: whitesmoke;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto;
        }
    }
}
</style>