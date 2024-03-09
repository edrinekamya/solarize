<script setup lang="ts">
import ThePaymentButton from '@/components/ThePaymentButton.vue'
import { usePaymentStore } from '@/stores/payment'
import { validateNumeric } from '@/util'
import { computed } from 'vue'

const store = usePaymentStore()

const isEmpty = computed(() => !store.phoneNumber)
const isMTN = computed(() => isEmpty.value || store.isMTN)
const isAIRTEL = computed(() => isEmpty.value || store.isAIRTEL)

const isValidMobileMoneyNumber = computed(() => !isEmpty.value && store.phoneNumber.length === 8)

const formattedNumber = computed({
  get: () => store.phoneNumber.replace(/^(.{2})/, '$1 '),
  set: (value) => (store.phoneNumber = value.replace(/\s/g, ''))
})

function handleKeyDown(event: any) {
  validateNumeric(event)
  const value = event.target.value + event.key
  if (!['0', '4', '5', '6', '7', '8'].includes(value.charAt(0))) {
    event.preventDefault()
  }
}
</script>

<template>
  <form
    @submit.prevent="store.processPayment('Mobile', isAIRTEL ? 'AIRTEL' : 'MTN')"
    class="column flex gap"
  >
    <section class="gap-s column">
      <p>Phone number</p>
      <section
        :class="{
          invalid: formattedNumber && !isValidMobileMoneyNumber
        }"
        class="row number"
      >
        <span class="ellipsis">+256 7</span>
        <input
          @keydown="handleKeyDown"
          class="flex phone"
          id="mobileMoneyNumber"
          v-model="formattedNumber"
          placeholder="xxx xxxxxx"
          maxlength="9"
        />
        <section class="row gap-s">
          <img v-if="isAIRTEL" class="logo" src="../assets/logo/airtel-logo.png" alt="" />
          <img v-if="isMTN" class="logo" src="../assets/logo/mtn-logo.png" alt="" />
        </section>
      </section>
    </section>
    <ThePaymentButton :is-valid="isValidMobileMoneyNumber" />
  </form>
</template>

<style scoped>
.logo {
  height: 24px;
  width: 24px;
}

span {
  font-size: 16px;
  font-weight: bold;
}

input {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  min-width: 32px;
}

.phone {
  color: var(--color-text);
}

.number {
  height: var(--action-height);
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;
}

.invalid {
  border: 1px solid red;
  color: red;
}

.invalid > input {
  color: red;
}
</style>
