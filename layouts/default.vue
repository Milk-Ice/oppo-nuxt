<template>
  <div class="layout">
    <!-- header -->
    <app-header></app-header>
    <navbar :navbars="navbars"></navbar>
    <!-- 页面内容的占位 -->
    <slot></slot>
    <!-- footer -->
    <app-footer></app-footer>
  </div>
</template>
<script setup lang="ts">
import useHomeStore from '@/store/index'
import { storeToRefs } from 'pinia'
// import { getHomeInfoAPI } from '~~/service/home'

// const { data } = await getHomeInfoAPI('oppo')
// console.log(data.value?.data)
const homeStore = useHomeStore()
const { navbars } = storeToRefs(homeStore)
homeStore.fetchHomeData('oppo')

// console.log(homeStore)
</script>
