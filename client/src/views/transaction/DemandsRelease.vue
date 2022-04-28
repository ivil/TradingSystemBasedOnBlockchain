<template>
    <div class="demandsRelease">
        <div>
            <ul>
                <li>名称</li>
                <div class="interval"></div>
                <li><input type="text"></li>
            </ul>
            <ul>
                <li>价格</li>
                <div class="interval"></div>
                <li><input type="text"></li>
            </ul>
            <ul>
                <li>库存</li>
                <div class="interval"></div>
                <li><input type="text"></li>
            </ul>
            <ul>
                <li>描述</li>
                <div class="interval"></div>
                <li><input type="text"></li>
            </ul>
            <ul>
                <it-button type="success" outlined>release</it-button>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>

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