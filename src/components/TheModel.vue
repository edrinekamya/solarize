<script setup lang='ts'>

defineProps<{useCase: number}>()


</script>

<template>
  <div class="flex">
    <img :src="`/src/assets/model${useCase ?? 0}.png`" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
}
</style>