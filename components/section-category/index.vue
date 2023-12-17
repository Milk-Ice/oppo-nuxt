import { title } from 'process';
<template>
  <div class="section-catrgory">
    <grid-title :title="category.title" />
    <grid-view
      :productDetailss="category.productDetailss"
      :category-url="category.url"
    />
  </div>
</template>

<script setup lang="ts">
import { ICateGorys } from '~~/types/home'

export interface IProps {
  category: ICateGorys
}
withDefaults(defineProps<IProps>(), {
  category: () => ({})
})
</script>

<style lang="scss" scoped></style>
