<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';
import { usePaymentStore } from '@/stores/payment';

const payment = usePaymentStore()

</script>

<template>
  <div class="grid-container">
    <div @click="payment.paymentMethod = 'Mobile'" :class="{ selected: payment.paymentMethod == 'Mobile' }"
      class="center column grid-item">
      <TheIcon :scale="3" name="FcCellPhone" />
      <h2>Mobile Money</h2>

    </div>
    <div @click="payment.paymentMethod = 'Card'" :class="{ selected: payment.paymentMethod == 'Card' }"
      class="center column grid-item">
      <TheIcon :scale="3" name="FcLibrary" />

      <h2>Bank or Credit Card</h2>
    </div>
  </div>
</template>

<style scoped></style>