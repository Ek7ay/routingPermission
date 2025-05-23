import { ElMessage } from 'element-plus'

export function setupRouteGuard(router) {
  router.beforeEach((to, from, next) => {
    // 如果已经是404页面，直接通过
    if (to.path === '/404') {
      next()
      return
    }

    // 检查路由是否存在（排除通配符路由）
    const routeExists = router.getRoutes().some(route => 
      route.path === to.path && !route.path.includes('*')
    )

    if (!routeExists) {
      ElMessage.error('页面不存在')
      next('/404')
      return
    }

    // 如果是跳转到page3，显示欢迎消息
    if (to.path === '/page3') {
      ElMessage.success('欢迎访问 Page3！')
    }
    
    next()
  })
}