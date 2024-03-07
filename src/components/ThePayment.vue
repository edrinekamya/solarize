<script setup lang='ts'>
import TheSlide from '@/components/TheSlide.vue';
import { useSlideStore } from '@/stores/session';

const slideShow = useSlideStore()
const currentSlide = slideShow.currentSlide;

</script>

<template>
  <div></div>
</template>

<style scoped></style>