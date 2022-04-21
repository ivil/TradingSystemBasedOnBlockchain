<template>
    <div class="nav">
        <div>
            <!-- <img class="logo" src="@/assets/logo/ivil.world.png"> -->
            <h3 style="color: white;font-size: 43px;">
                <div style="height: 10px;"></div>
                <span>ivil.world</span>
            </h3>
            <span style="width: 100px;"></span>
        </div>
        <div class="menu">
            <!-- <it-input prefix-icon="search" status="success" /> -->
            <span>买能源</span>
            <span>发现</span>
            <span>交易</span>
            <span>金融服务</span>
            <span>新手学院</span>
            <span>用户支持</span>
            <span>更多</span>
        </div>
        <template v-if="true">
            <div>
                <span>
                    <it-button @click="signInDialog = true" type="primary">Sign in</it-button>
                </span>
                <span>
                    <it-button @click="signUpDialog = true" type="primary">Sign up</it-button>
                </span>
            </div>
        </template>
        <template v-if="false">
            <div>
                <span>
                    <it-button type="primary">Sign out</it-button>
                </span>
            </div>
        </template>
    </div>
    <!-- 注册 -->
    <it-modal v-model="signUpDialog">
        <template #body>
            <div class="signupmodal">
                <h2><span>Sign up</span><span style="float: right;" @click="signUpDialog = false">X</span></h2>
                <it-input v-model="signUpForm.username" labelTop="Username" prefix-icon="account_circle"
                    placeholder="Unique Username" />
                <div class="divider"></div>
                <it-input v-model="signUpForm.password" labelTop="Password" prefix-icon="lock" type="password"
                    placeholder="Must have at least 6 characters" />
                <div class="divider"></div>
                <div class="signupmodal-wrap-inputs" style="display:flex;">
                    <it-input v-model="signUpForm.phoneNumber" style="flex:1" labelTop="Phone Number"
                        placeholder="your phone number" />
                    <span style="width: 43px;"></span>
                    <it-input v-model="signUpForm.nickname" style="flex:1" labelTop="nickname"
                        placeholder="a nickname which you like" />
                </div>
                <div class="divider"></div>
                <it-input v-model="signUpForm.email" labelTop="Email" prefix-icon="email" type="email"
                    placeholder="yourmail@gmail.com" />
                <div class="divider"></div>
                <!-- <div class="signupmodal-wrap-checkbox">
                    <it-checkbox v-model="checked" label="I agree to our Terms of Service" />
                </div> -->
                <div class="signupmodal-wrap-checkbox"
                    style="display: flex;align-items: center;justify-content: space-between;">
                    <it-checkbox v-model="checked" label="I agree to our Terms of Service" />
                    <it-button text type="primary" block @click="showTerms = true" style="width: auto; float: right;">
                        Read Terms of Service</it-button>
                </div>
                <div class="divider"></div>
                <it-button block size="big" type="primary" @click="signUpSubmit">Sign up</it-button>
            </div>
        </template>
    </it-modal>

    <!-- 登录 -->
    <it-modal v-model="signInDialog">
        <template #body>
            <div class="signupmodal p-3">
                <h2><span>Sign in</span><span style="float: right;" @click="signInDialog = false">X</span></h2>
                <div class="divider"></div>
                <it-input v-model="signInForm.username" label-top="Username" prefix-icon="account_circle"
                    placeholder="Unique Username" autocomplete="false" />
                <div class="divider"></div>
                <it-input v-model="signInForm.password" label-top="Password" prefix-icon="lock" type="password"
                    placeholder="Must have at least 6 characters" autocomplete="false" />
                <div class="divider"></div>
                <div class="signupmodal-wrap-checkbox"
                    style="display: flex;align-items: center;justify-content: space-between;">
                    <it-checkbox v-model="checked" label="I agree to our Terms of Service" />
                    <it-button text type="primary" block @click="showTerms = true" style="width: auto; float: right;">
                        Read Terms of Service</it-button>
                </div>
                <div class="divider"></div>
                <it-button block size="big" type="primary" :disabled="!agreedTOS" @click="signInSubmit">Sign in
                </it-button>
            </div>
        </template>
    </it-modal>

    <it-modal v-model="showTerms">
        <template #body>
            <div class="signupmodal p-3">
                <h2>Terms of Service</h2>
                <p class="overflow-x-hidden overflow-y-scroll h-64">
                    Text
                </p>
                <div class="signupmodal-wrap-checkbox">
                    <it-button block size="big" type="primary" @click="; (showTerms = false), (agreedTOS = true)">I
                        agree
                    </it-button>
                </div>
            </div>
        </template>
    </it-modal>
</template>
    
<script setup lang='ts'>import { reactive, ref } from 'vue';
import { Message } from 'equal-vue'
import { signUp, signIn } from '@/api/business/user.api';
import termsOfService from '@/utils/termsOfService'
const signUpDialog = ref(false)
const checked = ref(false)
const signInDialog = ref(false)
const showTerms = ref(false)
const agreedTOS = ref(true)

const signUpForm = reactive({
    username: '',
    password: '',
    phoneNumber: '',
    nickname: '',
    email: '',
})
const signUpSubmit = () => {
    console.log('11111');
    signUp(signUpForm).then(value => {
        console.log(value);
        Message.success({
            text: 'welcome!'
        })
    })
    signUpDialog.value = false
}
const signInForm = reactive({
    username: '',
    password: ''
})
const signInSubmit = () => {
    signIn(signInForm).then(value => {
        Message.success({
            text: 'welcome!'
        })
    })
    signInDialog.value = false
}
</script>
    
<style lang="less" scoped>
.divider {
    height: 20px;
}

.logo {
    height: 60px;
    width: 200px;
}

.nav {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    // border-bottom: 1px solid #67C23A;
    .menu {
        color: white;
    }

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
