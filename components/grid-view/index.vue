<template>
  <div class="grid-view">
    <div class="view-item first">
      <img :src="categoryUrl" alt="" />
    </div>
    <template v-for="(item, index) in productDetailss" :key="index">
      <slot>
        <div class="view-item">
          <gridview-item :productDetailss="item" />
        </div>
      </slot>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ProductDetailss } from '~~/types/home'

interface IProps {
  productDetailss?: ProductDetailss[]
  categoryUrl: string
}
withDefaults(defineProps<IProps>(), {
  productDetailss: () => [],
  categoryUrl: ''
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
  .first {
    width: 40%;
    & > img {
      width: 100%;
      height: 100%;
      /* 动画效果 */
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
