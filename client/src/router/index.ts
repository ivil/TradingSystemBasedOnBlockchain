import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import userRouter from '@/router/userRouter'
import dealRouter from '@/router/dealRouter'
import adminRouter from '@/router/adminRouter'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "HomeView",
    component: () => import("@/views/home/HomeView.vue")
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false,
    },
    ...userRouter,
    ...dealRouter,
    ...adminRouter,
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/notFound',
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
