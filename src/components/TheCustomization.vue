<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';
import { computed } from 'vue';

const props = defineProps<{ index: number }>()
const slideShow = useSlideStore()
const slide = computed(() => slideShow.slides[props.index]);
const slideCustomizations = computed(() => slideShow.customizations[slideShow.slideNumber] ?? [])

</script>

<template>
  <div class="grid-container">
    <div class="grid-item column center" v-for="(c, index) in slide.customizations"
      @click="slideShow.addCustomization(index, slide.type)" :key="c.name"
      :class="{ selected: slideCustomizations.includes(index) }">
      {{ c.name }}
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  overflow: auto;
}

.selected {
  border: 2px solid indigo;
}

.grid-item {
  min-height: 30vh;
}
</style>