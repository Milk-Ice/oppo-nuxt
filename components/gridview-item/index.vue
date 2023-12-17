<template>
  <div class="gridview-item">
    <img class="image" :src="productDetailss.url" alt="" />
    <div class="infos">
      <div class="skuName">{{ productDetailss.title }}</div>
      <div class="activityList">
        <template
          v-for="(item, index) in productDetailss.activityList"
          :key="index"
          ><span class="activityInfo">{{ item.activityInfo }}</span></template
        >
      </div>
      <div class="item-price">
        <span class="prefix">到手价</span>
        <span class="price">￥{{ productDetailss.priceInfo?.buyPrice }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductDetailss } from '~~/types/home'

interface IProps {
  productDetailss?: ProductDetailss
}
withDefaults(defineProps<IProps>(), {
  productDetailss: () => ({})
})
</script>

<style lang="scss" scoped>
.gridview-item {
  background-color: #fff;
  text-align: center;
  .image {
    width: $imgWidth;
    height: $imgHeight;
    margin-top: 14px;
    margin-bottom: 7px;
  }
  .skuName {
    padding: 0 0px;
    margin-top: 2px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    @include textEllipsis();
  }
  .activityList {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    color: $priceColor;
    .activityInfo {
      padding: 1px 7px;
      margin: 0px 10px;
      border: 1px solid $priceColor;
      /* border-radius: 10%; */
    }
  }
  .item-price {
    padding-bottom: 40px;
    .prefix {
      color: $priceColor;
      font-size: 13px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
      line-height: 1;
    }
  }
}
</style>
