import { ElMessage } from 'element-plus'

export function setupRouteGuard(router) {
  router.beforeEach((to, from, next) => {
    // 如果是跳转到page3，显示欢迎消息
    if (to.path === '/page3') {
      ElMessage.success('欢迎访问 Page3！')
    }
    next()
  })
}
