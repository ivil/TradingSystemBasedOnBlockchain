import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import homeRouter from '@/router/homeRouter'
import displayRouter from '@/router/displayRouter'
import dealRouter from '@/router/dealRouter'
import accountRouter from '@/router/accountRouter'

const routes: Array<RouteRecordRaw> = [
  ...homeRouter,
  ...displayRouter,
  ...dealRouter,
  ...accountRouter
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
