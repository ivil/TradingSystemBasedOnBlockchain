import {  RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

const homeRouter: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/info',
        name: 'ShowInfo',
        component: () => import("@/views/display/ShowInfo.vue")
    },
    {
        path: '/market',
        name: 'MarketPlace',
        component: () => import("@/views/transaction/MarketPlace.vue")
    },
]


export default homeRouter
