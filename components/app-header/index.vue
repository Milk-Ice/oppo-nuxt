<template>
  <div class="app-footer">app-footer</div>
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
  color: red;
}
</style>
