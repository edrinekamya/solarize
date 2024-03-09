<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';

defineProps<{errorMessage?: string}>()
</script>

<template>
  <Transition name="slide-fade">
    <div class="container center" v-if="errorMessage">
      <div class="row gap error-message">
        <TheIcon name="MdError" />
        {{ errorMessage }}
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease-in-out;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.container {
  position: absolute;
  left: 0;
  right: 0;
}

.error-message {
  padding: 8px;
  border: 1px solid #f44336;
  border-radius: 5px;
  color: #f44336;
  background-color: #ffebee;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  
}
</style>