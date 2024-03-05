<script setup lang="ts">
import { useMainStore } from '@/stores/main';
import { computed } from 'vue';

const props = defineProps<{
  status: SessionStatus
}>()
const store = useMainStore()
const selected = computed(() => store.statusFilter === props.status)
</script>

<template>
  <button :class="{ selected }" @click="store.statusFilter = status" type="button">{{ status }}</button>
</template>

<style scoped>
button {
  background: transparent;
  padding: 4px;
  color: var(--color-text-2);
  font-size: 12px;
  transition: all 0.5s ease

}

button:hover{
  background: var(--color-background-soft);
}

.selected {
  color: var(--color-text-1);
  background: var(--color-background-mute);
  padding: 8px;
}
</style>