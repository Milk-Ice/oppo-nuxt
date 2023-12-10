<template>
  <div class="register">register</div>
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
.register {
  color: red;
}
</style>
