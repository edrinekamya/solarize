<script setup lang='ts'>
import TheBasics from '@/components/TheBasics.vue';
import TheConfirmation from '@/components/TheConfirmation.vue';
import TheCustomization from '@/components/TheCustomization.vue';
import TheIntroduction from '@/components/TheIntroduction.vue';
import TheModel from '@/components/TheModel.vue';
import ThePayment from '@/components/ThePayment.vue';
import ThePaymentMethod from '@/components/ThePaymentMethod.vue';
import ThePaymentPlans from '@/components/ThePaymentPlans.vue';
import TheThankYou from '@/components/TheThankYou.vue';
import TheUserData from '@/components/TheUserData.vue';
import { useSlideStore } from '@/stores/session';
import { computed } from 'vue';

const props = defineProps<{ index: number, customizations: Customizations }>()
const slideShow = useSlideStore()
const slide = computed(() => slideShow.slides[props.index])
const slideCustomizations = computed(() => props.customizations[props.index] ?? [])

</script>

<template>
  <div class="container column flex">
    <div v-if="slideShow.session.status === 'Complete' && slide.type != 'conclusion'" class="overlay"></div>
    <h2 v-if="slide.type !== 'introduction' && slide.type !== 'visualization'"> {{ slide.title }}</h2>
    <TheIntroduction v-if="slide.type === 'introduction'" />
    <TheBasics v-else-if="slide.type === 'basics'" />
    <TheUserData v-else-if="slide.type === 'form'" />
    <TheCustomization :customizations="slideCustomizations" :slide="index"
      v-else-if="slide.type === 'choice' || slide.type === 'customization'" />
    <TheConfirmation v-else-if="slide.type === 'confirmation'" />
    <TheModel :use-case="0" v-else-if="slide.type === 'visualization'" />
    <ThePaymentPlans v-else-if="slide.type === 'payment-plan'" />
    <ThePaymentMethod v-else-if="slide.type === 'payment-method'" />
    <ThePayment v-else-if="slide.type === 'payment'" />
    <TheThankYou v-else-if="slide.type === 'conclusion'" />
  </div>
</template>

<style scoped>
.container {
  position: relative;
  max-width: 1024px;
  align-self: center;
}

h2 {
  text-align: center;
  color: var(--color-text-1);
}
</style>
