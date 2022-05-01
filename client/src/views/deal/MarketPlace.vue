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
                <template v-for="item in 7">
                    <ul>
                    <li>ivil</li>
                    <li>1</li>
                    <li>1000000</li>
                    <li>
                        <it-button outlined type="success" @click="">购买</it-button>
                    </li>
                </ul>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

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