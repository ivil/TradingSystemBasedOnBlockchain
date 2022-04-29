import {  RouteRecordRaw } from 'vue-router'

const accountRouter: Array<RouteRecordRaw> = [
    {
        path: '/accountInfo',
        name: 'AccountInfo',
        component: () => import("@/views/user/account/AccountInfo.vue")
    },
]


export default accountRouter
