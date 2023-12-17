<template>
  <div class="oppo-details">oppo-details</div>
</template>

<script setup lang="ts">
import { getDetailsInfoAPI } from '~~/service/details'

// interface IProps {
//   title?: string
// }
// const props = withDefaults(defineProps<IProps>(), {
//   title: ''
// })
const { data } = await getDetailsInfoAPI('oppo')
console.log(data.value?.data)
</script>

<style lang="scss" scoped>
.oppo-details {
  color: red;
}
</style>
