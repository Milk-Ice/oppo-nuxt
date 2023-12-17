<template>
  <div class="onePlus wrapper">
    <my-carousel :banners="data?.data.banners"></my-carousel>
    <tab-category :categorys="data?.data.categorys" />
    <template v-for="category in data?.data.categorys" :key="category.id"
      ><section-category :category="category"></section-category
    ></template>
  </div>
</template>

<script setup lang="ts">
// interface IProps {
//   title?: string
// }
// const props = withDefaults(defineProps<IProps>(), {
//   title: ''
// })
import { getHomeInfoAPI } from '@/service/home'
const { data } = await getHomeInfoAPI('onePlus')
// console.log(data.value?.data)
</script>

<style lang="scss" scoped>
.onePlus {
  /* color: red; */
}
</style>
