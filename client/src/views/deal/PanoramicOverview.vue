<template>
        <button @click="test">test</button>
</template>
    
<script setup lang='ts'>
    const test = ()=>{
        window.location.href = 'http://127.0.0.1:5501/client/public/display/index.html'
    }
</script>
    
<style lang="less" scoped>
    
</style>