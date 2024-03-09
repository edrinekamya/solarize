<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';
import { usePaymentStore } from '@/stores/payment';

const store = usePaymentStore()
defineProps<{ isValid: boolean }>()
</script>

<template>
  <button :disabled="!isValid" type="submit" class="center gap">
    <section v-if="store.isPaymentProgress">
      <TheIcon v-if="store.paymentStep === 'Processing'" animation="spin" name="FaSpinner" />
      <TheIcon v-if="store.paymentStep === 'Success'" name="BiCheckCircleFill" />
      <TheIcon v-if="store.paymentStep === 'Validating'" name="FaCogs" animation="spin" />
      <TheIcon v-if="store.paymentStep === 'Securing'" animation="spin" name="FaLock" />
    </section>
    {{ store.isPaymentProgress ? `${store.paymentStep} ...` : 'Pay' }}
  </button>
</template>
