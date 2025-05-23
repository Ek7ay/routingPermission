<template>
  <div class="not-found">
    <img src="@/assets/imgs/404.png" alt="404" class="error-img">
    <div class="error-info">
      <h1>404</h1>
      <div class="error-desc">抱歉，你访问的页面不存在</div>
      <router-link to="/" class="back-home">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.not-found {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;

  .error-img {
    max-width: 400px;
    width: 100%;
    margin-bottom: 20px;
  }

  .error-info {
    text-align: center;

    h1 {
      font-size: 72px;
      color: #409eff;
      margin-bottom: 20px;
    }

    .error-desc {
      font-size: 20px;
      color: #666;
      margin-bottom: 20px;
    }

    .back-home {
      display: inline-block;
      padding: 10px 20px;
      background: #409eff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background 0.3s;

      &:hover {
        background: #66b1ff;
      }
    }
  }
}
</style>

