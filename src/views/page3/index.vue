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
  responseData.value = res.data
}

onMounted(() => {
  getDefaultTempApi()
  console.log(import.meta.env)
})
</script>

<style scoped></style>
