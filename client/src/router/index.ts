import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import userRouter from '@/router/userRouter'
import dealRouter from '@/router/dealRouter'

// 路由重名会导致路由匹配失败
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "HomePage",
    component: () => import("@/views/home/HomePage.vue")
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('@/components/NotFound.vue'),
    meta: {
      keepAlive: true,
      isTab: false,
      isAuth: false,
    },
  },
  ...userRouter,
  ...dealRouter,
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
