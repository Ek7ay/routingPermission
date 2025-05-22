<script setup>
import { ref } from 'vue'

const buttons = ['按钮1', '按钮2', '按钮3', '按钮4', '按钮5']
const activeIndex = ref(0)
</script>

<template>
  <div class="button-group">
    <button 
      v-for="(btn, index) in buttons" 
      :key="index"
      :class="['switch-btn', { active: activeIndex === index }]"
      @click="activeIndex = index"
    >
      {{ btn }}
    </button>
  </div>
</template>

<style lang='less' scoped>
.button-group {
  display: flex;
  gap: 10px;
}

.switch-btn {
  padding: 8px 16px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    background-color: #f44336;
  }
}
</style>