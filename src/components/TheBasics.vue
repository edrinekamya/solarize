<script setup lang="ts">
import { solarReasons } from '@/data'
import { computed, ref } from 'vue'

const currentIndex = ref<any>(null)

const selectedReason = computed(() =>
  currentIndex.value != null ? solarReasons[currentIndex.value] : null
)

function changeDescription(index: number) {
  currentIndex.value = currentIndex.value == index ? null : index
}
</script>

<template>
  <div class="container gap column">
    <div class="grid-container">
      <div
        @click="changeDescription(index)"
        :class="{ selected: currentIndex == index }"
        class="grid-item column"
        v-for="(section, index) in solarReasons"
        :key="index"
      >
        <h2>{{ section.title }}</h2>
        <section class="row">
          <p>{{ section.description }}</p>
          <Transition name="fade">
            <div class="column reasons" v-if="currentIndex == index">
              <li v-for="m in selectedReason?.merits" :key="m">{{ m }}</li>
            </div>
          </Transition>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.total {
  font-weight: bold;
}

.calculator {
  padding: 10px;
  background: var(--color-background);
}

.calculator-icon {
  position: absolute;
  bottom: 64px;
  right: 24px;
  height: auto;
}

.reasons {
  background: var(--color-background-soft);
  padding: 16px;
  display: flex;
  position: absolute;
  border-radius: 12px;
}

li {
  padding: 2px 0;
}

.grid-container {
  overflow: auto;
}

.grid-item {
  transition: all 0.3s ease;
  padding: 16px;
}

.selected {
  box-shadow: none;
}

h1,
h2 {
  color: var(--color-text-1);
}

h2 {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
