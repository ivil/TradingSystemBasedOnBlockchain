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
]


export default dealRouter
