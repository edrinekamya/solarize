<script setup lang="ts">

import { camelToKebab } from '@/util';
defineProps<{
  name: string
  scale?: number
}>()

const emit = defineEmits(['press']);

</script>

<template>
  <button class="center" @click.stop="emit('press')" type="button">
    <v-icon :scale="scale" :name="camelToKebab(name)" />
    <slot></slot>
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
  height: 24px;
}

button:hover {
  background: rgba(255, 255, 255, 0.1);
}
</style>