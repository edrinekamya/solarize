<script setup lang="ts">
import TheSlideContent from '@/components/TheSlideContent.vue'
import { useSlideStore } from '@/stores/session'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<{ index: number }>()
const slideShow = useSlideStore()
const { width: windowWidth } = useWindowSize()
// const slideWidth = computed(() => windowWidth.value / (windowWidth.value > 1024 ? 3 : windowWidth.value > 768 ? 2 : 1))
const translateX = computed(() => (props.index - slideShow.session.slideNumber) * windowWidth.value)
</script>

<template>
  <div
    :style="{ transform: `translateX(${translateX}px)`, width: `${windowWidth}px` }"
    class="slide column flex"
  >
    <TheSlideContent :customizations="slideShow.session.customizations" :index="index" />
  </div>
</template>

<style scoped>
h1 {
  position: sticky;
  top: 12px;
  text-align: center;
}

.slide {
  transition: all 0.5s ease-in-out;
  position: absolute;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 64px;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3);
  overflow: auto;
}

h1 {
  color: var(--color-text-1);
  margin-bottom: 20px;
}
</style>
