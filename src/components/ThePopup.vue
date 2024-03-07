<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const isOpen = ref(false);
const parent = ref<HTMLElement | null>(null);
const popup = ref<HTMLElement | null>(null);
const top = ref(0);
const left = ref(0);

async function toggle() {
  isOpen.value = !isOpen.value;
  await nextTick()
  positionPopup()
}

function positionPopup() {
  if (parent.value == null || popup.value == null) return
  const triggerRect = parent.value.getBoundingClientRect();
  const popupRect = popup.value.getBoundingClientRect();
  if (triggerRect.left + popupRect.width > window.innerWidth) {
    left.value = (triggerRect.left - popupRect.width + triggerRect.width);
  } else {
    left.value = triggerRect.left;
  }
  if (triggerRect.top + popupRect.height > window.innerHeight) {
    top.value = (triggerRect.top - popupRect.height);
  } else {
    top.value = triggerRect.bottom;
  }
}

function close() {
  isOpen.value = false
}

onMounted(() => {
  document.body.addEventListener('click', close);
  window.addEventListener('resize', positionPopup);
});

onBeforeUnmount(() => {
  document.body.removeEventListener('click', close);
  window.removeEventListener('resize', positionPopup);
});

defineExpose({
  toggle
})

</script>

<template>
  <div ref="parent" class="parent">
    <transition name="fade">
      <div :style="{ top: top + 'px', left: left + 'px' }" @click.stop="null" v-show="isOpen" ref="popup" class="popup">
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
  position: absolute;
  margin: 4px;
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
