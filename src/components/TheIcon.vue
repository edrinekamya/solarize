<script setup lang="ts">
import { camelToKebab } from '@/util';
defineProps<{
  name: string
  scale?: number,
  animation?: 'wrench' | 'ring' | 'pulse' | 'spin' | 'spin-pulse' | 'flash' | 'float'
}>()
</script>

<template>
  <v-icon :scale="scale" :animation="animation" :name="camelToKebab(name)" />
</template>
