<template>
  <div class="app-footer">
    <div class="content wrapper">
      <div class="content-left">
        <NuxtLink to="" class="link">OPPO官网</NuxtLink>
        <NuxtLink to="" class="link">一加官网</NuxtLink>
      </div>
      <div class="content-right">
        <span class="link">下载 OPPO 商城App</span>
        <NuxtLink to="/login" class="link_border" target="_blank">
          <i class="iconfont icon-user"></i>登录</NuxtLink
        >
        <NuxtLink to="/register" class="link_border" target="_blank"
          >注册</NuxtLink
        >
        <NuxtLink to="/cart" class="link"
          ><i class="iconfont icon-shoppingcart"></i>购物车</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string
}
withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss">
.app-footer {
  height: 40px;
  display: flex;
  align-items: center;
  background-color: black;
  color: $bgGrayColor;
  font-size: $fontSize12;
}
.content {
  display: flex;
}
.content-left {
  width: 750px;
}
.link {
  display: inline-block;
  margin-right: 10px;
  color: $bgGrayColor;
  font-size: $fontSize12;
  line-height: 14px;
  /* 左右加padding就可以有对齐的竖线 */
  padding: 0 14px;
  text-decoration: none;
}
.link_border {
  display: inline-block;
  margin-right: 10px;
  color: $bgGrayColor;
  font-size: $fontSize12;
  line-height: 14px;
  padding: 0 14px;
  text-decoration: none;
  border-right: 1px solid #fff;
}
.iconfont {
  margin-right: 6px;
}
.icon-user {
  font-size: 12px;
  opacity: 1;
}
.icon-shoppingcart {
  font-size: 12px;
  opacity: 1;
}
</style>
