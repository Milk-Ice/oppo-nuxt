<template>
  <div class="home wrapper">
    <my-carousel></my-carousel>
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
.home {
  color: red;
}
</style>
