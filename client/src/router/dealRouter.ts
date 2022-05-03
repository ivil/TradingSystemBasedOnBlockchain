import { RouteRecordRaw } from 'vue-router'

const dealRouter: Array<RouteRecordRaw> = [
    {
        path: '/market',
        name: 'MarketPlace',
        component: () => import("@/views/deal/MarketPlace.vue")
    },
    {
        path: '/marketInfo',
        name: 'MarketInfo',
        component: () => import("@/views/deal/MarketInfo.vue")
    },
    {
        path: '/marketBackup',
        name: 'MarketPlace_backup',
        component: () => import("@/views/deal/MarketPlace_backup.vue")
    },
]


export default dealRouter
