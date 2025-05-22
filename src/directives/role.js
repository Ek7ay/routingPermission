// 自定义权限指令
export default {
  mounted(el, binding) {
    // 获取指令的绑定值，即角色值
    const { value } = binding
    
    // 存储元素原始的display值
    const originalDisplay = el.style.display
    el.dataset.originalDisplay = originalDisplay || ''
    
    // 检查是否为指定角色
    if (value !== 'admin') {
      el.style.display = 'none'
    }
  },
  
  updated(el, binding) {
    // 获取指令的绑定值，即角色值
    const { value } = binding
    
    // 根据角色值控制显示状态
    if (value !== 'admin') {
      el.style.display = 'none'
    } else {
      // 恢复原始display值，如果没有则默认为空字符串（浏览器会使用默认display值）
      el.style.display = el.dataset.originalDisplay
    }
  }
}