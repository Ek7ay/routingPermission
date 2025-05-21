<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
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
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPageName = computed(() => {
  const pageMap = {
    '/page1': '页面1',
    '/page2': '页面2',
    '/page3': '页面3'
  }
  return pageMap[route.path] || '当前页面'
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
          <el-menu router default-active="/" class="side-menu">
            <el-menu-item index="/page1">
              <template #title>页面1</template>
            </el-menu-item>
            <el-menu-item index="/page2">
              <template #title>页面2</template>
            </el-menu-item>
            <el-menu-item index="/page3">
              <template #title>页面3</template>
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
