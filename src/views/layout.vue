<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView, useRouter, useRoute } from 'vue-router'
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus'

const router = useRouter()
const route = useRoute()

// 获取路由配置中的菜单项
const menuItems = computed(() => {
  // 获取根路由的children
  const rootRoute = router.options.routes.find(route => route.path === '/')
  return rootRoute?.children || []
})

// 生成页面标题
const currentPageName = computed(() => {
  const currentRoute = menuItems.value.find(item => item.path === route.path.slice(1))
  return currentRoute ? currentRoute.name : '当前页面'
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <div class="logo">
          <RouterLink to="/">
            <img src="@/assets/logo.svg" alt="logo" style="height: 40px">
          </RouterLink>
        </div>
        <el-breadcrumb separator="/" class="breadcrumb">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ currentPageName }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-container>
        <el-aside width="200px" class="menu-container">
          <el-menu router :default-active="route.path" class="side-menu">
            <el-menu-item v-for="item in menuItems" :key="item.path" :index="'/' + item.path">
              <template #title>{{ item.name }}</template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main class="main-content">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 1px solid #41B883;
  }

  .menu-container {
    border-right: 1px solid #41B883;
    position: absolute;
    left: 0;
    top: 60px;
    bottom: 0;
    z-index: 1;
  }

  .main-content {
    position: absolute;
    top: 60px;
    left: 200px;
    right: 0;
    bottom: 0;
    padding: 20px;
    background-color: #f5f5f5;
    overflow: auto;
    z-index: 0;
    transition: all 0.3s;
  }
}
</style>