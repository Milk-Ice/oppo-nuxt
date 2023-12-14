<template>
  <div class="tab-category">
    <template v-for="(item, index) in categorys" :key="index">
      <div class="category-item" @click="handleItemClick(item)">
        <img class="pic-str" :src="item.picStr" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ICateGorys } from '~~/types/home'

export interface IProps {
  categorys: ICateGorys[]
}
withDefaults(defineProps<IProps>(), {
  categorys: () => []
})
// const emits = defineEmits(["itemClick"]);
const emits = defineEmits<{
  (e: 'itemClick', item: ICateGorys): void
}>()

function handleItemClick(item: ICateGorys) {
  emits('itemClick', item)
}
</script>

<style lang="scss" scoped>
.tab-category {
  margin-top: 40px;
  /* color: red; */
  /* @include border(); */
  @include normalFlex();
  align-items: center;

  .category-item {
    height: 100%;
    cursor: pointer;

    .pic-str {
      width: 80px;
      height: 80px;
    }

    .title {
      color: $fontSize14;
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
      height: 24px;
      max-width: '120px';
    }
  }
}
</style>
