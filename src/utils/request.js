import axios from 'axios'
import { MediaSeeding_Api } from "@/constant/api";
// 创建axios实例
const service = axios.create({
  baseURL: MediaSeeding_Api.api, // 修改为外部API地址
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如：添加token
    const token = localStorage.getItem('token') || 'eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE3NDgzMTM0NTgsImN1c3RvbWVyIjoiY2FveXAyIn0.smplJ-Q6BxNYw2JM4yCQzsyPUiG4rKe8LUsq0XedBUwIS-HketmpL3UuAVtYvK_VfcQAMjzvWuOaRQ3erXcpIA'
    if (token) {
      config.headers['token'] = `${token}`
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    console.error('请求错误：', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 这里直接返回数据，不做code判断
    return res
  },
  error => {
    // 处理网络错误等情况
    console.error('响应错误：', error)
    return Promise.reject(error)
  }
)

export default service
