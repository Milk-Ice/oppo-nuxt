<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="Reno9系列" />
    <img class="search-svg" src="../../assets/images/search.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
// interface IProps {
//   title?: string
// }
// const props = withDefaults(defineProps<IProps>(), {
//   title: ''
// })
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  .search-input {
    margin-left: 40px;
    outline: none;
    border: none;
    opacity: 0.3;
  }
  .search-svg {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
