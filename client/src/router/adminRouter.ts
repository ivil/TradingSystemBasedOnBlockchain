import { RouteRecordRaw } from 'vue-router'

const adminRouter: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        name: "AdminView",
        component: () => import("@/views/admin/AdminView.vue")
    },
]


export default adminRouter
