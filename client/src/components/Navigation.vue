<template>
    <div class="nav">
        <div>
            Logo
        </div>
        <div>
            search
        </div>
        <div>
            <span>
                <it-button @click="showDialog = true" type="primary">Sign in</it-button>
            </span>
            <span>
                <it-button @click="showDialog = true" type="primary">Sign up</it-button>
            </span>
        </div>
    </div>

    <it-modal v-model="showDialog">
        <template #body>
            <div class="signupmodal">
                <h2>Sign up</h2>
                <it-input v-model="form.username" labelTop="Username" prefix-icon="account_circle"
                    placeholder="Unique Username" />
                <div class="divider"></div>
                <it-input v-model="form.password" labelTop="Password" prefix-icon="lock" type="password"
                    placeholder="Must have at least 6 characters" />
                <div class="divider"></div>
                <div class="signupmodal-wrap-inputs" style="display:flex;">
                    <it-input v-model="form.phoneNumber" style="flex:1" labelTop="Phone Number"
                        placeholder="your phone number" />
                    <span style="width: 43px;"></span>
                    <it-input v-model="form.nickname" style="flex:1" labelTop="nickname"
                        placeholder="a nickname which you like" />
                </div>
                <div class="divider"></div>
                <it-input v-model="form.email" labelTop="Email" prefix-icon="email" type="email"
                    placeholder="yourmail@gmail.com" />
                <div class="divider"></div>
                <div class="signupmodal-wrap-checkbox">
                    <it-checkbox v-model="checked" label="I agree to our Terms of Service" />
                </div>
                <div class="divider"></div>
                <it-button block size="big" type="primary" @click="submit">Sign up</it-button>
            </div>
        </template>
    </it-modal>
</template>
    
<script setup lang='ts'>import { reactive, ref } from 'vue';
import { Message } from 'equal-vue'
const showDialog = ref(false)
const checked = ref(false)
const form = reactive({
    username: '',
    password: '',
    phoneNumber: '',
    nickname: '',
    email: '',
})
const submit = () => {
    Message.success({
        text: 'welcome!'
    })
    console.log(form);
    showDialog.value = false
}
</script>
    
<style lang="less" scoped>
.divider {
    height: 20px;
}

.nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 33.3%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            margin-right: 20px;
        }
    }
}
</style>
