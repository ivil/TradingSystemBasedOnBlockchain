<template>
    <Navigation />
    <div class="home">
        <!-- <button @click="router.push('/info')">跳转到大屏展示页</button> -->
        <div class="left">
            <div class="box">
                <h1>未来，已来</h1>
                <h3>在区块链革命浪潮之中，探寻数字能源</h3>
                <br>
                <div class="register">
                    <it-input status="success" placeholder="手机号/邮箱" />
                    <it-button type="primary" size="big">立即注册</it-button>
                </div>
            </div>
        </div>
        <div class="right">
            <!-- <img src="@/assets/images/okex.png"> -->
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import Navigation from '@/components/Navigation.vue'

</script>
    
<style scoped lang="less">
.home {
    // background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
    min-height: calc(100vh - 61px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

    .left {
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;

        .box {
            height: 400px;

            h1 {
                font-size: 80px;
            }

            .register {
                display: flex;

                /deep/.it-input-wrapper--success {
                    height: 46px;
                    margin-right: 10px;
                    width: 220px;
                }
            }
        }
    }

    .right {
        width: 50vw;
        display: flex;
        align-items: center;
        background-size: 100% 100%;

        img {
            width: 40vw;
            height: 40vw;
        }
    }
}
</style>