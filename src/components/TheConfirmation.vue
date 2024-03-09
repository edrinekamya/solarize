<script setup lang="ts">
import { useSlideStore } from '@/stores/session'
import { computed } from 'vue'

const slides = useSlideStore()
const savings = computed(() => slides.savingsAndROI)
</script>

<template>
  <div class="flex gap column grid-center-content">
    <h3 class="grid-content-heading">Summary</h3>
    <section class="row spaced">
      <span>Savings</span>
      <p>{{ savings.baseSavings }}</p>
    </section>
    <section class="row spaced">
      <span>Return on Investment</span>
      <p>{{ savings.baseROI }}</p>
    </section>
    <h4>With Add-ons</h4>
    <section class="row spaced">
      <span>Savings</span>
      <p>{{ savings.newSavings }}</p>
    </section>
    <section class="row spaced">
      <span>Return on Investment</span>
      <p>{{ savings.newROI }}</p>
    </section>
    <p></p>
    <div class="buttons row center gap">
      <button @click="slides.close" class="no">No, Thank You</button>
      <button @click="slides.schedule" class="later bd">Maybe later</button>
      <button @click="slides.nextSlide" class="yes">Yes, I'm In</button>
    </div>
  </div>
</template>

<style scoped>
button {
  height: 40px;
  font-size: 18px;
  border-radius: 12px;
}

.buttons {
  margin-top: 16px;
}

h4 {
  margin-top: 16px;
  color: white;
}

.yes {
  background: green;
}

.no {
  background: red;
}

.later {
  background: var(--color-background-mute);
  color: var(--color-text-1);
}
</style>
