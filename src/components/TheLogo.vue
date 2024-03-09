<script setup lang="ts">
const props = defineProps<{
  size?: number
}>()
const size = props.size ?? 24
</script>

<template>
  <img src="../assets/logo.svg" :width="size" :height="size" alt="Logo" />
</template>
