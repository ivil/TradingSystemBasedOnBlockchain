import { RouteRecordRaw } from 'vue-router'

const dealRouter: Array<RouteRecordRaw> = [
    {
        path: '/market',
        name: 'MarketPlace',
        component: () => import("@/views/deal/MarketPlace.vue")
    },
    {
        path: '/blockInfo',
        name: 'BlockInfo',
        component: () => import("@/views/deal/BlockInfo.vue")
    },
    {
        path: '/marketBackup',
        name: 'MarketPlace_backup',
        component: () => import("@/views/deal/MarketPlace_backup.vue")
    },
]


export default dealRouter
