<script setup lang="ts">

import { camelToKebab } from '@/util';
defineProps<{
  name: string
}>()

const emit = defineEmits(['press']);

</script>

<template>
  <button @click.stop="emit('press')" type="button">
    <v-icon :name="camelToKebab(name)" />
  </button>
</template>

<style scoped>
button {
  border: none;
  color: var(--color-text);
  padding: 4px;
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
}

button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>