<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';
import { usePaymentStore } from '@/stores/payment';

const store = usePaymentStore()
defineProps<{ isValid: boolean }>()
</script>

<template>
  <button :disabled="!isValid" type="submit" class="center button">
    <section v-if="store.isPaymentProgress" class="row gap-s">
      <TheIcon v-if="store.paymentStep === 'Processing'" name="FaSpinner" />
      <TheIcon v-if="store.paymentStep === 'Success'" name="BiCheckCircleFill" />
      <TheIcon v-if="store.paymentStep === 'Validating'" name="FaCogs" />
      <TheIcon v-if="store.paymentStep === 'Securing'" name="FaLock" />
    </section>
    {{ store.isPaymentProgress ? `${store.paymentStep}...` : 'Pay' }}
  </button>
</template>

<style scoped>
.spinner {
  height: 40px;
  width: 40px;
  position: relative;
}
</style>