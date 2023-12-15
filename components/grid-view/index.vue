<template>
  <div class="grid-view">
    <template v-for="(item, index) in 10" :key="index">
      <div class="category-items">
        <img
          class="image"
          src="https://dsfs.oppo.com/archives/202112/2021121506121861b9bceeac5d2.png?_w_=320&_h_=320"
          alt=""
        />
        <div class="infos">
          <div class="skuName">
            OPPO Find N 全新折叠旗舰 8G+256G 星夜 官方标配
          </div>
          <div class="activityList">
            <span class="activityInfo">12期免息</span>
            <span class="activityInfo">缺货</span>
          </div>
          <div class="price"><span>到手价</span> <span>￥5489</span></div>
        </div>
      </div>
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
  @include border();
  .infos {
    @include border();
    .skuName {
      @include textEllipsis();
    }
  }

  .image {
    @include border();
    width: 200px;
    height: 200px;
  }
}
</style>
