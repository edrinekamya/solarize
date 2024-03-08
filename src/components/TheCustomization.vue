<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';
import { computed } from 'vue';

const props = defineProps<{ slide: number, customizations: number[] }>()
const slideShow = useSlideStore()
const currentSlide = computed(() => slideShow.slides[props.slide]);

</script>

<template>
  <div class="grid-container">
    <div class="grid-item column" v-for="(c, index) in currentSlide.customizations"
      @click="slideShow.addCustomization(slide, index, currentSlide.type, c.pricing)" :key="c.name"
      :class="{ selected: customizations.includes(index) }">
      <img class="flex" v-if="c.image" :src="`/src/assets/${c.image}`" />
      <div class="column info">
        <section class="row gap spaced">
          <h3> {{ c.name }}</h3>
          <p :class="{pricing: c.image}" >${{ c.pricing }}</p>
        </section>
        <span> {{ c.description }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.grid-item {
  position: relative;
}

p {
  font-weight: bold;
}

.pricing {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  left: 16px;
  top: 16px;
  padding: 2px 8px;
  border-radius: 4px;
  color: white;
}

h3 {
  color: var(--color-text-1);
}
.info {
  padding: 16px;
  gap: 16px
}
img {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 16px;
}

.grid-container {
  overflow: auto;
}


</style>