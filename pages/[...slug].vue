<template>
  <div class="page-not-Found">page-not-Found</div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style lang="scss">
.page-not-Found {
  color: red;
}
</style>
