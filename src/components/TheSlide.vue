<script setup lang='ts'>
import TheBasics from '@/components/TheBasics.vue';
import TheCustomization from '@/components/TheCustomization.vue';
import TheConfirmation from '@/components/TheConfirmation.vue';
import TheIntroduction from '@/components/TheIntroduction.vue';
import TheModel from '@/components/TheModel.vue';
import ThePayment from '@/components/ThePayment.vue';
import TheThankYou from '@/components/TheThankYou.vue';
import { useSlideStore } from '@/stores/session';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const props = defineProps<{ index: number }>()
const slideShow = useSlideStore()
const slide = computed(() => slideShow.slides[props.index])
const { width: windowWidth } = useWindowSize()
const slideWidth = computed(() => windowWidth.value / (windowWidth.value > 1024 ? 3 : windowWidth.value > 768 ? 2 : 1))
const translateX = computed(() => (props.index - slideShow.slideNumber) * slideWidth.value)

</script>

<template>
  <div :style="{ transform: `translateX(${translateX}px)`, width: `${slideWidth}px` }" class="slide column flex center">
    <h1 v-if="slide.type !== 'introduction'"> {{ slide.title }}</h1>
    <TheIntroduction v-if="slide.type === 'introduction'" />
    <TheBasics v-else-if="slide.type === 'basics'" />
    <TheCustomization :index="index" v-else-if="slide.type === 'choice' || slide.type === 'customization'" />
    <TheModel v-else-if="slide.type === 'visualization'" />
    <TheConfirmation v-else-if="slide.type === 'confirmation'" />
    <ThePayment v-else-if="slide.type === 'payment'" />
    <TheThankYou v-else-if="slide.type === 'conclusion'" />
  </div>
</template>

<style scoped>
h1 {
  position: sticky;
}

.slide {
  transition: all 0.5s ease-in-out;
  position: absolute;
  height: 100%;
  overflow: auto;
  padding: 64px 0px;
}

h1 {
  color: var(--color-text-1);
  margin-bottom: 20px;
}
</style>
