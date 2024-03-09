<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';
const slideShow = useSlideStore()
</script>

<template>
  <div class="flex center column">
    <div class="column grid-center-content gap content">
      <h3 class=".grid-content-heading">Thank you for choosing Solarize!</h3>
      <p>The agent will be sent instructions on how to proceed shortly</p>
      <button @click="slideShow.close">Close</button>
    </div>
  </div>
</template>

<style scoped></style>