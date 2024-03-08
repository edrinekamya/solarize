<script setup lang='ts'>
import { useSlideStore } from '@/stores/session';

const slideShow = useSlideStore()

const options: PaymentPlan[] = [{
  name: 'One-time',
  discount: 0.18,
  description: 'a one go',
  duration: 1
},
{
  name: 'Monthly (Recommended)',
  discount: 0.08,
  description: 'per month for 12 months',
  duration: 12
},
{
  name: 'Weekly',
  discount: 0.02,
  description: 'per week for 52 weeks',
  duration: 52
}

]
</script>

<template>
  <div class="grid-container">
    <div @click="slideShow.session.paymentPlan = option" :class="{ selected: slideShow.session.paymentPlan?.name == option.name }"
      class="grid-item column" v-for="option in options" :key="option.name">
      <p class="name">{{ option.name }}</p>
      <code class="flex column">
        <div class="total row spaced">
        <p>Total Cost</p>
        <p>${{ slideShow.totalCost }}</p>
        </div>
        <section class="row spaced discount">
        <p>Discount</p>
        <p>-{{ option.discount * 100 }}%</p>
        
      </section>
      <div class="total row spaced">
        <p>Gross Pay</p>
        <p>${{ (slideShow.totalCost * (1 - option.discount)).toFixed(2) }}</p>
        </div>
      </code>
      <code
        class="frequency-amount">${{ (slideShow.totalCost / option.duration * (1 - option.discount)).toFixed(2) }}</code>
      <span> Billed {{
        option.description }}</span>

    </div>
  </div>
</template>

<style scoped>
.frequency-amount {
  color: white;
  font-weight: bold;
}

code {
  justify-content: center;
}

.name {
  color: var(--color-text-1);
}

.grid-item {
  padding: 16px;
}

.discount {
  color: red;
}
</style>