<template>
  <div class="carousel">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          src="https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-n3-series/cn/find-n3/v1/assets/images-kv-kv.jpg?v=1698134093000"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel } from 'element-plus'
import { ElCarouselItem } from 'element-plus'
// interface IProps {
//   title?: string
// }
// const props = withDefaults(defineProps<IProps>(), {
//   title: ''
// })
</script>

<style lang="scss" scoped></style>
