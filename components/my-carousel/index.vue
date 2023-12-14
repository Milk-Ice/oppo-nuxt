<template>
  <div class="carousel">
    <el-carousel
      height="480px"
      indicator-position="none"
      @change="handleCarouselChange"
    >
      <el-carousel-item v-for="item in banners" :key="item.id">
        <img class="pic-str" :src="item.picStr" alt="" />
      </el-carousel-item>
    </el-carousel>
    <ul class="dots">
      <li
        v-for="(item, index) in banners"
        :key="item.id"
        :class="['dot', currentIndex === index ? 'active' : '']"
      ></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ElCarousel } from 'element-plus'
import { ElCarouselItem } from 'element-plus'
import { IBanners } from '~~/types/home'
interface IProps {
  banners?: IBanners[]
}
withDefaults(defineProps<IProps>(), {
  banners: () => []
})
const currentIndex = ref<number>(0)
function handleCarouselChange(index: number) {
  currentIndex.value = index
  // console.log(currentIndex.value)
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  z-index: -99;
}
.dots {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  text-align: center;
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 10px;
    background-color: rgb(255, 255, 255);
    opacity: 0.8;
  }
  .active {
    background-color: transparent;
    border: 2px solid #fff;
    width: 12px;
    height: 12px;
    position: relative;
    top: 1px;
  }
}
</style>
