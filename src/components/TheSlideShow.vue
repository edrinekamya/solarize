<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';
import TheSlide from '@/components/TheSlide.vue';
import { useMainStore } from '@/stores/main';
import { usePaymentStore } from '@/stores/payment';
import { useSlideStore } from '@/stores/session';
import { computed, watchEffect } from 'vue';

const slideShow = useSlideStore()
const progress = computed(() => slideShow.session.progress + 1)
const main = useMainStore()
const slideNumber = computed(() => slideShow.session.slideNumber)
const payment = usePaymentStore()
const savings = computed(() => slideShow.savingsAndROI)

watchEffect(() => {
  if (slideShow.session.progress > 2) {
    // persist the session past the introductory slides
    const id = main.addSession({ ...slideShow.session, lastOpened: new Date().toISOString() })
    if (!slideShow.session.id) {
      slideShow.session.id = id
    }
  }
})

</script>

<template>
  <div v-if="slideShow.isOnGoing" class="slide-show column">
    <div v-if="payment.isPaymentProgress" class="overlay"></div>
    <section class="slide-container flex">
      <TheSlide v-for="index in progress" :key="index" :index="index - 1" />
    </section>
    <section  class="header absolute row spaced">
      <button v-if="slideNumber" @click="slideShow.previousSlide">
        <TheIcon name="HiSolidArrowCircleLeft" />
      </button>
      <span v-else></span>
      <button @click="slideShow.isOnGoing = false">
        <TheIcon name="MdCancelRound" />
      </button>
    </section>
    <section v-if="!slideShow.isLast" class="footer absolute row spaced">
      <section class="row slide-number-section">
        <article :class="{ selected: slideNumber === n - 1, dot: n - 1 < slideNumber || n - 1 > slideNumber }"
          class="slide-number center" v-for="n in progress" :key="n" @click="slideShow.goToSlide(n - 1)">{{ n }}
        </article>
      </section>
      <button @click="slideShow.nextSlide()" v-if="!slideShow.hideNext">
        <TheIcon name="HiSolidArrowCircleRight" />
      </button>
    </section>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.slide-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/src/assets/introduction.png');
  background-size: cover;
  backdrop-filter: blur(5px);
}

.absolute {
  position: fixed;
  right: 0;
  left: 0;
  padding: 24px;
}

.header {
  top: 0;
}

.footer {
  bottom: 0;
}

.slide-number-section {
  gap: 2px;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 8px;
  color: white;
}

.slide-number {
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 32px;
}

.slide-number:hover {
  padding: 4px;
  color: white;
  background: var(--color-accent-2);
}

.slide-number.selected {
  background: var(--color-accent);
  color: white;
}

.slide-number.dot {
  height: 15px;
  width: 15px;
}


.slide-show {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  background: var(--color-background);
}
</style>