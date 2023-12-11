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
import { getHomeInfoAPI } from '~~/service/home'

const { data } = await getHomeInfoAPI('oppo')
console.log(data.value?.data)
</script>
