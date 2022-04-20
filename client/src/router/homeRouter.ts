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
        component: () => import("@/views/home/ShowInfo.vue")
    },
]


export default homeRouter
