<template>
    <h3 style="text-align: center;width: 97vw;">管理系统</h3>
    <div class="container">
        <div class="box">
            <h3>生态积分管理</h3>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">发行积分</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">销毁积分</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input status="success" placeholder="value" />
                </li>
            </ul>
        </div>
        <div class="box">
            <h3>能源创建</h3>
            <br>
            <ul>
                <li>
                    <it-input status="success" placeholder="name" />
                </li>
                <li>
                    <it-input status="success" placeholder="symbol" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-input status="success" placeholder="decimals" />
                </li>
                <li>
                    <it-input status="success" placeholder="total" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">铸造能源</it-button>
                </li>
            </ul>
            <br>
            <br>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">销毁能源</it-button>
                </li>
                &nbsp;
                <li>
                    <it-input status="success" placeholder="symbol" />
                </li>
            </ul>
        </div>
        <div class="box">
            <h3>能源管理</h3>
            <br>
            <ul>
                <li>
                    <it-input status="success" placeholder="symbol" />
                </li>
                <li>
                    <it-input status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">增发能源</it-button>
                </li>
            </ul>
            <br>
            <br>
            <br>
            <br>
            <ul>
                <li>
                    <it-input status="success" placeholder="symbol" />
                </li>
                <li>
                    <it-input status="success" placeholder="value" />
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <it-button outlined type="success" @click="">缩减能源</it-button>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

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