<template>
  <div class="app-header">app-header</div>
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
.app-header {
  color: red;
}
</style>
