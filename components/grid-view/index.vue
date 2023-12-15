<template>
  <div class="grid-view">
    <template v-for="(item, index) in 10" :key="index">
      <slot>
        <div class="view-item"><gridview-item /></div>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ProductDetailss } from '~~/types/home'

interface IProps {
  productDetailss?: ProductDetailss[]
}
withDefaults(defineProps<IProps>(), {
  productDetailss: () => []
})
// console.log('props')
</script>

<style lang="scss" scoped>
.grid-view {
  margin-top: 40px;
  @include normalFlex();
  align-items: center;
  flex-wrap: wrap;
  /* @include border(); */
  .view-item {
    /* @include border(red); */
    /* height: $gridItemHeight; */
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }
}
</style>
