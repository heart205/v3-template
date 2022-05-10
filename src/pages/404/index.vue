<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function goBack() {
  router.back()
}
</script>

<template>
  <div class="not-found">
    <div>
      <img src="../../assets/images/404.png" />
      <div>
        <span class="not-tips">404</span>
        <p class="font-24">page not found</p>
        <div>
          <button class="goBack btn" @click="goBack">go back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 18px;
}
.not-found > div {
  margin: auto;
  display: flex;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
}
.not-found > div > div {
  flex-shrink: 0;
  margin: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    flex-shrink: inherit;
    margin-bottom: 18px;
  }
}
.not-found img {
  margin: auto;
}
.goBack {
  font-size: 16px;
  cursor: pointer;
  background-color: var(--btn-primary-color);
  color: var(--color);
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: var(--btn-primary-hover-color);
  }
}
.not-tips {
  font-size: 50px;
  font-weight: bold;
  color: var(--btn-primary-color);
}
.font-24 {
  font-size: 24px;
}
</style>
