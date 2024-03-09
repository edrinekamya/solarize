<script setup lang="ts">
import { useSlideStore } from '@/stores/session'

const slideShow = useSlideStore()
console.log(slideShow.panelOutput)
</script>

<template class="flex column">
  <div class="flex gap column grid-center-content">
    <h3 class="grid-content-heading">
      This information is used to tailor a solution specific to your use case
    </h3>
    <label
      >Average Sunlight Hours
      <input v-model.number="slideShow.session.sunlightHours" type="number" min="0" />
    </label>
    <label
      >Electricity Cost (per kWh)
      <input v-model.number="slideShow.session.electricityCost" type="number" min="0" />
    </label>
    <label>
      Roof Size (Square meters)
      <input v-model.number="slideShow.session.solarSpace" type="number" min="0" />
    </label>
  </div>
</template>

<style scoped>
h3 {
  font-size: 12px;
}

.flex {
  background: var(--color-background);
  border-radius: 16px;
  padding: 12px;
}

input {
  border: 1px solid var(--color-text-1);
  display: flex;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
}
</style>
