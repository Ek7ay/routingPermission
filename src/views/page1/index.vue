<script setup>
import { storeToRefs } from 'pinia'
import { useRoleStore } from '@/stores/counter'
const roleStore = useRoleStore()
const { role } = storeToRefs(roleStore)

</script>

<template>
  <div>当前角色：{{ role }}</div>
  <div>访客和管理员都能看见</div>
  <div v-role="role">只有管理员能看见</div>
</template>

<style lang='less' scoped></style>
