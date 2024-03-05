<script setup lang="ts">
import { useElementBounding, useWindowSize } from '@vueuse/core';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const isOpen = ref(false);
const parent = ref<HTMLElement | null>(null);
const popup = ref<HTMLElement | null>(null);

function toggle() {
  isOpen.value = !isOpen.value;

}
const { width: windowWidth, height: windowHeight } = useWindowSize();
const { x: parentLeft, y: parentTop } = useElementBounding(parent);
const { width: popupWidth, height: popupHeight } = useElementBounding(popup);

const left = computed(() => {
  if (parentLeft.value + popupWidth.value > windowWidth.value) {
    return popupWidth.value - windowWidth.value - parentLeft.value;
  } else {
    return parentLeft.value;
  }
})

const top = computed(() => {
  if (parentTop.value + popupHeight.value > windowHeight.value) {
    return popupHeight.value - windowHeight.value - parentTop.value;
  } else {
    return parentTop.value;
  }
})

function close() {
  isOpen.value = false
}

onMounted(() => {
  document.body.addEventListener('click', close);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('click', close);
});

defineExpose({
  toggle
})

</script>

<template>
  <div ref="parent">
    <transition name="fade">
      <div @click.stop="null" v-if="isOpen" :style="{ top: `${top}px`, left: `${left}px` }" ref="popup" class="popup">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popup {
  background: var(--color-background-mute);
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--color-border);
  position: fixed;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
