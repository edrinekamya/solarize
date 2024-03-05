<script setup lang="ts">
import { camelToKebab } from '@/util';
defineProps<{
  name: string
}>()
</script>

<template>
  <v-icon :name="camelToKebab(name)" />
</template>
