import {  RouteRecordRaw } from 'vue-router'

const dealRouter: Array<RouteRecordRaw> = [
    {
        path: '/demandsRelease',
        name: 'DemandsRelease',
        component: () => import("@/views/transaction/DemandsRelease.vue")
    },
]


export default dealRouter
