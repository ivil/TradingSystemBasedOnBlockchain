import { RouteRecordRaw } from 'vue-router'

const userRouter: Array<RouteRecordRaw> = [
    {
        path: '/wealth',
        name: '/MyWealth',
        component: () => import("@/views/user/MyWealth.vue")
    },
    {
        path: '/wealthBackup',
        name: '/MyWealth_backup',
        component: () => import("@/views/user/account/MyWealth_backup.vue")
    },
    
]


export default userRouter
