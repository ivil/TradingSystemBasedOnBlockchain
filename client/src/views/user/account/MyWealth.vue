<template>
    <div class="container">
        <div class="header">
            <h3 style="text-align: center;">我的资产</h3>
        </div>
        <div class="body">
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="">积分</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>
                        可用余额
                    </li>
                    <li>
                        1000 BTC
                    </li>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="">转账</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
                    </li>
                </ul>
                <hr>
                <ul>
                    <li>
                        <it-button text type="success" @click="">转移能源</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
                    </li>
                </ul>
                <ul>
                    <h4>
                        <it-button text type="success" @click="">持有能源</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>能源数量</li>
                </ul>
                <template v-for="item in 7">
                    <ul>
                        <li>name</li>
                        <li>count</li>
                    </ul>
                </template>
            </div>
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="">出售能源</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="">出售</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="symbol" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="address" />
                    </li>
                    <li>
                        <it-input status="success" placeholder="value" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <it-button text type="success" @click="">取消出售</it-button>
                    </li>
                    <li>
                        <it-input status="success" placeholder="index" />
                    </li>
                </ul>
            </div>
            <div class="box">
                <ul>
                    <h4>
                        <it-button text type="success" @click="">交易记录</it-button>
                    </h4>
                </ul>
                <ul>
                    <li>能源名称</li>
                    <li>数量</li>
                    <li>价格</li>
                </ul>
                <template v-for="item in 7">
                    <ul>
                        <li>ivil</li>
                        <li>1</li>
                        <li>10000</li>
                    </ul>
                </template>
            </div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

</script>
    
<style lang="less" scoped>
/deep/.it-input {
    width: 100px;
}

.container {
    .body {
        height: 90vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        overflow: auto;

        .box {
            width: 30%;
            height: 100%;

            ul {
                display: flex;
                align-content: center;
                justify-content: space-around;
                flex-wrap: wrap;
                margin: 20px 0;
            }
        }
    }
}
</style>