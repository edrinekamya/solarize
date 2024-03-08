<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';

const slides = useSlideStore()
</script>

<template>
  <div class="container flex row center gap">
    <button @click="slides.close" class="no">No, Thank You</button>
    <button @click="slides.schedule" class="later bd">Maybe later</button>
    <button @click="slides.nextSlide" class="yes">Yes, I'm In</button>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
}

button {
  height: 40px;
  border-radius: 12px;
}

.yes {
  background: green;
}

.no {
  background: red;
}

.later {
  background: var(--color-background-mute);
  color: var(--color-text-1)
}
</style>