<template>
    <div class="nav">
        <span>
            <h3 @click="router.push('/')">ivil.world</h3>
        </span>
        <span>
            <ul>
                <template v-for="(item, index) in NavMenu" :key="index">
                    <li @click="toModule(item)"> {{ item.name }} </li>
                </template>
            </ul>
        </span>
        <span>
            <h3>基于区块链的能源交易系统</h3>
        </span>
    </div>
</template>
    
<script setup lang='ts'>
import router from '@/router/index';
import { ref } from 'vue';

const NavMenu = ref([
    {
        name: '能源管理',
        path: '/admin',
    },
    {
        name: '我的资产',
        path: '/wealth',
    },
    {
        name: '交易市场',
        path: '/market',
    },
    {
        name: '链上数据',
        path: '/blockInfo',
    }
])
const toModule = (item: { name: string, path: string }) => {
    router.push(item.path)
}

</script>
    
<style scoped lang="less">
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

    span {
        padding-left: 30px;
        padding-right: 30px;

        h3 {
            font: italic 2.5em Georgia, serif;
            letter-spacing: 3px;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 20px;

            li {
                margin-right: 20px;
                font-weight: 600;
            }
        }
    }
}
</style>