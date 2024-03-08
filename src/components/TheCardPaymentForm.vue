<script setup lang="ts">
import ThePaymentButton from '@/components/ThePaymentButton.vue'
import { countryList } from '@/data'
import {
  amexRegex,
  cardFormatRegex,
  cvcRegex,
  emailRegex,
  masterCardRegex,
  nameRegex,
  visaRegex
} from '@/regex'
import { usePaymentStore } from '@/stores/payment'
import { validateCardNumber, validateNumeric } from '@/util'
import { computed } from 'vue'

const store = usePaymentStore()

const formattedCcExp = computed({
  get: () => store.ccExp.replace(/^(.{2})/, '$1 / '),
  set: (value) => (store.ccExp = value.replace(/[^0-9]/g, ''))
})

const formattedCardNumber = computed({
  get: () => store.cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '),
  set: (value) => (store.cardNumber = value.replace(/\s/g, ''))
})

const isCardEmpty = computed(() => !store.cardNumber)
const isMasterCard = computed(() => isCardEmpty.value || masterCardRegex.test(store.cardNumber))
const isVisa = computed(() => isCardEmpty.value || visaRegex.test(store.cardNumber))
const isAmex = computed(() => isCardEmpty.value || amexRegex.test(store.cardNumber))

const emailValid = computed(() => emailRegex.test(store.email))
const ccExpValid = computed(() => store.ccExp.length === 4)
const cvcValid = computed(() => cvcRegex.test(store.cvc))
const nameValid = computed(() => nameRegex.test(store.name))
const countryValid = computed(() => countryList.includes(store.country))
const isCardFormatValid = computed(
  () =>
    cardFormatRegex.test(formattedCardNumber.value) &&
    (isAmex.value || isMasterCard.value || isVisa.value) &&
    validateCardNumber(store.cardNumber)
)

const isFormValid = computed(
  () =>
    emailValid.value &&
    ccExpValid.value &&
    cvcValid.value &&
    nameValid.value &&
    countryValid.value &&
    isCardFormatValid.value
)

function validateCcExp(event: any) {
  validateNumeric(event)
  const key = event.key
  const value = event.target.value + key
  const month = parseInt(value.slice(0, 2))
  const year = parseInt(value.slice(3))

  if ((value.length === 2 && month > 12) || (value.length === 4 && year < 19)) {
    event.preventDefault()
  }
}
</script>

<template>
  <form @submit.prevent="
    store.processPayment('Card', isAmex ? 'AMEX' : isMasterCard ? 'MASTERCARD' : 'VISA')
    " class="flex gap column">
    
    <section class="column gap-s">
      <p>Email</p>
      <input v-model="store.email" :class="{ invalid: store.email && !emailValid }" required type="email" />
    </section>
    <section class="gap-s column">
      <p>Card information</p>
      <section class="card-container gap-s row" :class="{ invalid: !isCardEmpty && !isCardFormatValid }">
        <input @keydown="validateNumeric" :maxlength="19" v-model="formattedCardNumber" class="card-number flex"
          required autocomplete="cc-number" placeholder="1234 1234 1234 1234" type="text" />
        <img v-if="isMasterCard" class="logo" src="/src/assets/logo/card.png" alt="" />
        <img v-if="isVisa" class="logo" src="/src/assets/logo/visa.png" alt="" />
        <img v-if="isAmex" class="logo" src="/src/assets/logo/american-express.png" alt="" />
      </section>
      <span class="danger" v-if="!isCardEmpty && !isCardFormatValid">Invalid card number</span>
      <section class="flex cc-row row gap-s">
        <input class="half" @keydown="validateCcExp" maxlength="7" v-model="formattedCcExp"
          :class="{ invalid: formattedCcExp && !ccExpValid }" required autocomplete="cc-exp" placeholder="MM / YY"
          type="text" />
        <input class="half" maxlength="3" @keydown="validateNumeric" v-model="store.cvc"
          :class="{ invalid: store.cvc && !cvcValid }" required autocomplete="cc-csc" placeholder="CVC" type="text" />
      </section>
    </section>
    <section class="gap-s column">
      <p>Cardholder name</p>
      <input v-model="store.name" :class="{ invalid: store.name && !nameValid }" required autocomplete="cc-name"
        placeholder="Full name on card" type="text" />
    </section>
    <section class="gap-s column">
      <p>Country or region</p>
      <select v-model="store.country" :class="{ invalid: store.country && !countryValid }" required>
        <option v-for="country in countryList" :key="country" :value="country">
          {{ country }}
        </option>
      </select>
    </section>
    <ThePaymentButton :isValid="isFormValid" />
  </form>
</template>

<style scoped>

select {
  background: transparent;
}
.half {
  min-width: 10px;
}

span.danger {
  font-size: 12px;
}

input,
select,
.card-container {
  border: 1px solid grey;
  border-radius: 8px;
}

button,
.card-container,
select,
input {
  height: var(--action-height);
  padding: 16px;
}

.card-number {
  border: none;
  padding: 0;
}

.invalid {
  border: 1px solid red;
  color: red;
}

.invalid>input {
  color: red;
}
</style>
