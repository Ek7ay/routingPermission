<template>
  <div>
    <h2>接口数据展示：{{ responseData }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getDefaultTemp } from '@/service'

const responseData = ref(null)

const getDefaultTempApi = async () => {
  const params = {
    tableName: '项目管理-项目概览',
    confName: '系统默认配置',
  }
  const res = await getDefaultTemp(params)
  console.log('接口返回数据：', res)
  responseData.value = res.data
}

onMounted(() => {
  getDefaultTempApi()
})
</script>

<style scoped>
pre {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
