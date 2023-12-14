<template>
  <div class="home wrapper">
    <my-carousel :banners="banners"></my-carousel>
    <tab-category :categorys="categorys" @item-click="handleItemClick" />
  </div>
</template>

<script setup lang="ts">
// interface IProps {
//   title: string
// }
// withDefaults(defineProps<IProps>(), {
//   title: ''
// })
import useHomeStore from '@/store/index'
import { storeToRefs } from 'pinia'
import { ICateGorys } from '~~/types/home'
const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)
function handleItemClick(item: ICateGorys) {
  console.log(item.title)
}
</script>

<style lang="scss">
.home {
}
</style>
