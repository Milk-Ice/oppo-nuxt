<template>
  <div class="home wrapper">
    <my-carousel :banners="banners"></my-carousel>
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
const homeStore = useHomeStore()
const { banners } = storeToRefs(homeStore)
</script>

<style lang="scss">
.home {
  color: red;
}
</style>
