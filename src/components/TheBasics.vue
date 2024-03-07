<script setup lang="ts">
import { solarReasons } from "@/data";

</script>

<template>
  <div class="gap column">
    <div class="grid-container">
      <div class="grid-item center" v-for="(section, index) in solarReasons" :key="index">
        <h2>{{ section.title }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>

h1 {
  color: var(--color-text-1);
}

h2 {
  font-size: 16px;
}

</style>
