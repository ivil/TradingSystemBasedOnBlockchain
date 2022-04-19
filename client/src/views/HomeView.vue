<template>
    home
    <ul>
        <li>2</li>
        <li>2</li>
        <li>2</li>
    </ul>
</template>

<script lang="ts" setup>
import Web3 from 'web3'

window.ethereum.enable().then(async () => {
    const web3 = new Web3(window.web3.currentProvider || "HTTP://127.0.0.1:7777")
    console.log(web3);

}, (error: any) => {
    console.log(error);
})
console.log('1111');

</script>

<style lang="less">
</style>