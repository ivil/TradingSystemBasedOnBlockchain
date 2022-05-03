<template>
    <div class="nav">
        <span>
            <h3>ivil.world</h3>
        </span>
        <span>
            <ul>
                <template v-for="(item, index) in NavMenu" :key="index">
                    <li @click="toModule(item)"> {{ item.name }} </li>
                </template>
            </ul>
        </span>
        <span>
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
        name: '最近行情',
        path: '/marketInfo',
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
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 20px;

            li {
                margin-right: 20px;
            }
        }
    }
}
</style>