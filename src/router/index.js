import { createRouter, createWebHistory } from 'vue-router'
import { setupRouteGuard } from './permission'

const pages = import.meta.glob('../views/**/index.vue')

// 自动生成路由配置
const generateRoutes = () => {
  return Object.entries(pages)
    .map(([path, component]) => {
      // 从路径中提取路由信息
      const routePath = path.replace('../views/', '').replace('/index.vue', '').replace(/^\//, '')
      // 生成路由名称
      const name = routePath.replace(/\//g, '-')
      return {
        path: routePath,
        name,
        component,
      }
    })
    .filter((route) => route.path !== 'layout') // 排除layout组件
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/layout.vue'),
    redirect: '/page1',
    children: generateRoutes(),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/error/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

setupRouteGuard(router)

export default router