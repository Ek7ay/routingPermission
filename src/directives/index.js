import role from './role'

// 自定义指令集合
const directives = {
  role
}

// 批量注册指令
export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}

/* 使用示例：
1. 在main.js中注册：
import directives from './directives'
app.use(directives)

2. 在组件中使用：
<div v-role="'admin'">只有admin角色可见</div>
*/
