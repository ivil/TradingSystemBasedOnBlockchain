import {  RouteRecordRaw } from 'vue-router'

const displayRouter: Array<RouteRecordRaw> = [
    {
        path: '/display',
        name: 'PanoramicOverview',
        component: () => import("@/views/display/PanoramicOverview.vue")
    },
]


export default displayRouter
