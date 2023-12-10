<template>
  <div class="login">login</div>
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
.login {
  color: red;
}
</style>
