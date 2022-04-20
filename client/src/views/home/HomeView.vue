<template>
    <Navigation/>
    <div class="home">
        <button @click="router.push('/info')">跳转到大屏展示页</button>
    </div>
</template>

<script lang="ts" setup>
import Navigation from '@/components/Navigation.vue'
import router from '@/router/index'
</script>

<style lang="less" scoped>

</style>