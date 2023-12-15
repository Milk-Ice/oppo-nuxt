<template>
  <div class="gridview-item">
    <img
      class="image"
      src="https://dsfs.oppo.com/archives/202112/2021121506121861b9bceeac5d2.png?_w_=320&_h_=320"
      alt=""
    />
    <div class="infos">
      <div class="skuName">OPPO Find N 全新折叠旗舰 8G+256G 星夜 官方标配</div>
      <div class="activityList">
        <span class="activityInfo">12期免息</span>
        <span class="activityInfo">缺货</span>
      </div>
      <div class="item-price">
        <span class="prefix">到手价</span> <span class="price">￥5489</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss" scoped>
.gridview-item {
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
      padding: 2px 10px;
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
