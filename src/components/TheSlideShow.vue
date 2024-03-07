<script setup lang='ts'>
import TheIcon from '@/components/TheIcon.vue';
import TheIconButton from '@/components/TheIconButton.vue';
import TheSlide from '@/components/TheSlide.vue';
import { useMainStore } from '@/stores/main';
import { useSlideStore } from '@/stores/session';
import { computed, onBeforeMount, watchEffect } from 'vue';

const slideShow = useSlideStore()
const progress = computed(() => slideShow.progress + 1)
const main = useMainStore()

watchEffect(() => {
  if (slideShow.progress > 2) {
    // persist the session past the introductory slides
    const id = main.addSession(slideShow.session)
    if (!slideShow.id) {
      slideShow.id = id
    }
  }
})

onBeforeMount(() => {
  slideShow.$reset()
})

</script>

<template>
  <div v-if="slideShow.isOnGoing" class="slide-show column">
    <section class="slide-container flex">
      <TheSlide v-for="index in progress" :key="index" :index="index - 1" />
    </section>
    <section class="header absolute row spaced">
      <button v-if="slideShow.slideNumber" @click="slideShow.previousSlide">
        <TheIcon name="HiSolidArrowCircleLeft" />
      </button>
      <TheIconButton @click="slideShow.isOnGoing = false" name="MdCancelRound" />
    </section>
    <section class="footer absolute row spaced">
      <section class="row slide-number-section">
        <article
          :class="{ selected: slideShow.slideNumber === n - 1, dot: n - 1 < slideShow.slideNumber || n - 1 > slideShow.slideNumber }"
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
.slide-container {
  position: relative;
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
  gap: 2px
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