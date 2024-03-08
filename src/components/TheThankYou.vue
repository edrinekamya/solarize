<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';

const slideShow = useSlideStore()
const currentSlide = slideShow.currentSlide;

</script>

<template>
  <div class="flex center column">
    <h2>Thank you for choosing Solarize!</h2>
    <button @click="slideShow.close">Close</button>
  </div>
</template>

<style scoped></style>