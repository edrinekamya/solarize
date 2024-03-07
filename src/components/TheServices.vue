<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';

const slideShow = useSlideStore()
const currentSlide = slideShow.currentSlide;

</script>

<template>
  <div></div>
</template>

<style scoped></style>