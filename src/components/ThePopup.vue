<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const isPopupVisible = ref(false)
const popupButton = ref<HTMLElement | null>(null)
const popup = ref<HTMLElement | null>(null)
const emit = defineEmits(['close'])

const toggle = () => {
  isPopupVisible.value = !isPopupVisible.value
  if (isPopupVisible.value) {
    positionPopup()
  } else {
    emit('close')
  }
}

function close() {
  isPopupVisible.value = false
  emit('close')
}

defineExpose({
  toggle
})

const positionPopup = async () => {
  await nextTick()
  if (!popupButton.value || !popup.value) return
  const triggerRect = popupButton.value.getBoundingClientRect()
  const popupRect = popup.value.getBoundingClientRect()
  if (triggerRect.left + popupRect.width > window.innerWidth) {
    popup.value.style.left = triggerRect.left - popupRect.width + triggerRect.width + 'px'
  } else {
    popup.value.style.left = triggerRect.left + 'px'
  }
  if (triggerRect.top + popupRect.height > window.innerHeight) {
    popup.value.style.top = triggerRect.top - popupRect.height + 'px'
  } else {
    popup.value.style.top = triggerRect.bottom + 'px'
  }
}

onMounted(() => {
  positionPopup()
  document.addEventListener(
    'click',
    function (event) {
      if (popup.value && !popup.value.contains(event.target as any)) {
        close()
        event.stopPropagation()
      }
    },
    true
  )
  window.addEventListener('resize', positionPopup)
})

onBeforeUnmount(() => {
  document.body.removeEventListener('click', close)
  window.removeEventListener('resize', positionPopup)
})
</script>

<template>
  <div class="popup-container">
    <button ref="popupButton" class="popup-button" @click="toggle">
      <slot name="trigger"></slot>
    </button>
    <div @click.stop ref="popup" class="popup" v-if="isPopupVisible">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
button {
  width: auto;
  height: auto;
  padding: 0;
  background: transparent;
}

.popup {
  position: absolute;
  z-index: 99;
  padding: 10px;
  border-radius: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background: var(--color-background-mute);
  border-radius: 4px;
  border: 1px solid var(--color-border);
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
