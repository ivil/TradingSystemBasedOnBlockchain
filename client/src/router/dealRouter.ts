import { RouteRecordRaw } from 'vue-router'

const dealRouter: Array<RouteRecordRaw> = [
    {
        path: '/market',
        name: 'MarketPlace',
        component: () => import("@/views/deal/MarketPlace.vue")
    }
]


export default dealRouter
