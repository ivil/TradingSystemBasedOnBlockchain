<template>
    <div class="header">
        能源交易系统全国分布大数据展示
    </div>
    <div class="statistics">
        <div class="aside">
            <div>实时统计</div>
            <div>项目分类</div>
            <div>押金分类的交易数据统计</div>
        </div>
        <div class="center">
            <div class="nav">
                <span>项目需求人数</span>
                <span>项目供应人数</span>
            </div>
            <div class="map">
                这是个大地图
            </div>
        </div>
        <div class="aside">
            <div>
                重用项目分类
            </div>
            <div>
                近十二月（新增/交付）项目数据
            </div>
            <div>
                合约流水
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.header{
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.statistics{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90vh;
    width: 100vw;
    .center{
        width: 50%;
        background-color: wheat;
        height: 100%;
        .nav{
            height: 20%;
            background-color: aquamarine;
        }
    }
    .aside{
        width: 25%;
        background-color: whitesmoke;
        height: 100%;
        div{
            height: 33.3%;
        }
    }
}
</style>