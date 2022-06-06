import { RouteRecordRaw } from 'vue-router'

const userRouter: Array<RouteRecordRaw> = [
    {
        path: '/wealth',
        name: '/MyWealth',
        component: () => import("@/views/user/MyWealth.vue")
    },
    
]


export default userRouter
