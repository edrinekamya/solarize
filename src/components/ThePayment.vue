<script setup lang="ts">
import TheCardPaymentForm from '@/components/TheCardPaymentForm.vue'
import TheErrorMessage from '@/components/TheErrorMessage.vue'
import TheMobilePaymentForm from '@/components/TheMobilePaymentForm.vue'
import { usePaymentStore } from '@/stores/payment'

const payment = usePaymentStore()
</script>

<template>
  <div class="flex column">
    <TheErrorMessage :error-message="payment.error" />
    <h2>{{ payment.paymentMethod == 'Mobile' ? 'Mobile Money' : 'Credit Card Payment' }}</h2>
    <TheMobilePaymentForm v-if="payment.paymentMethod == 'Mobile'" />
    <TheCardPaymentForm v-else />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  color: white;
}

.flex {
  background: var(--color-background);
  border-radius: 16px;
  padding: 12px;
}
</style>
