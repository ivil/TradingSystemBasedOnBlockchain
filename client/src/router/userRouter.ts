import { RouteRecordRaw } from 'vue-router'

const userRouter: Array<RouteRecordRaw> = [
    {
        path: '/wealth',
        name: '/MyWealth',
        component: () => import("@/views/user/account/MyWealth.vue")
    },
    {
        path: '/accountInfo',
        name: 'AccountInfo',
        component: () => import("@/views/user/account/AccountInfo.vue")
    },
]


export default userRouter
