<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <navbar></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>
<script setup lang="ts">
import useHomeStore from '@/store/index'
// import { getHomeInfoAPI } from '~~/service/home'

// const { data } = await getHomeInfoAPI('oppo')
// console.log(data.value?.data)
const homeStore = useHomeStore()
homeStore.fetchHomeData('oppo')
console.log(homeStore)
</script>
