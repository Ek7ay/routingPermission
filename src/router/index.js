import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/layout.vue'),
    redirect: '/page1',
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('../views/page1/index.vue'),
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/page2/index.vue'), // 改为导入实际组件文件
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('../views/page3/index.vue'), // 改为导入实际组件文件
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
