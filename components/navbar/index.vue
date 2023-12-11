<template>
  <div class="navbar">
    <div class="content wrapper">
      <div class="content-left">
        <img class="logo" src="../../assets/images/logo.png" alt="" />
        <!-- seo优化 -->
        <h1 class="title">OPPO商城</h1>
      </div>
      <ul class="category">
        <li><NuxtLink class="link" to="/">OPPO专区</NuxtLink></li>
        <li><NuxtLink class="link" to="/">OnePlus专区</NuxtLink></li>
        <li><NuxtLink class="link" to="/">智能硬件</NuxtLink></li>
        <li><NuxtLink class="link" to="/">服务</NuxtLink></li>
      </ul>
      <Search></Search>
    </div>
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
.navbar {
  line-height: 90px;
}
.content {
  /* background-color: green; */
  display: flex;
  align-items: center;
  .content-left {
    display: flex;
    align-items: center;
    .logo {
      height: 60px;
      width: 290px;
    }
  }
  .category {
    display: flex;
    align-items: center;
    .link {
      color: $textSubColor;
      padding: 20px 30px;
      opacity: 0.8;
      cursor: pointer;
    }
    .link:hover {
      color: $textTitleColor;
      opacity: 1;
      text-shadow: 1cm;
    }
  }
}
.title {
  text-indent: -1000px;
  height: 0;
  margin: 0;
}
</style>
