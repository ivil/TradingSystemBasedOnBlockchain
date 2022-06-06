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
]


export default dealRouter
