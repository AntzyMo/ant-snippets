import { transform, transformCode } from '../utils/index.js'

const v3 = transformCode`
<script setup>
 
</script>

<template>

</template>

<style lang="scss" scoped>

</style>`

const v3t = transformCode`
<script setup lang="ts">
 
</script>

<template>

</template>

<style lang="scss" scoped>

</style>`

export const ref = transformCode`
const %1:fun% = ref(%2%)`

export const reactive = transformCode`
const %1:fun% = reactive(%2%)`

export const watch = transformCode`
watch(%1%, () => {
  %2%
})`

export const computed = transformCode`
const %1:fun% = computed(() => {
  %2%
})`

export default {
  'vue3-setup': transform('v3', v3),
  'vue3-setup-ts': transform('v3t', v3t)
}
