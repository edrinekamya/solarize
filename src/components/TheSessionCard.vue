<script setup lang='ts'>
import TheIconButton from '@/components/TheIconButton.vue';
import TheSlideContent from '@/components/TheSlideContent.vue';
import { useMainStore } from '@/stores/main';
import { useSlideStore } from '@/stores/session';
import { useTimeAgo } from '@vueuse/core';

const props = defineProps<{ session: UserSession }>()
const slidesShow = useSlideStore();
const main = useMainStore()
const timeAgo = useTimeAgo(props.session.lastOpened)

</script>

<template>
  <article @click="slidesShow.startExisting(session)">
    <section class="flex column last-session">
      <div @click.stop class="top row spaced">
        <input type="text" placeholder="Untitled" v-model="main.sessions[(session.id as number)].customer"
          class="session-name" />
        <TheIconButton @press="main.deleteSession(session.id)" name="MdDeleteforeverRound" />
      </div>
      <TheSlideContent :customizations="session.customizations" :index="session.slideNumber" />
    </section>
    <div class="session-info row spaced">
      <p>Last Updated {{ timeAgo }}</p>
      <section v-if="session.status == 'Active'"><progress :value="session.progress" :max="slidesShow.numOfSlides"
          class="session-progress-bar"></progress> {{ session.progress }}/{{ slidesShow.numOfSlides }}</section>
      <section v-else-if="session.status == 'Scheduled'"></section>
      <section v-else></section>
    </div>
  </article>
</template>

<style scoped>
article {
  background: var(--color-background-mute);
  border-radius: 16px;
  cursor: pointer;
}

.last-session {
  height: 250px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}

.last-session>.top {
  padding: 16px;
  padding-right: 12px;
}

.session-info {
  padding: 16px;
}

.session-name {
  font-size: 16px;
  font-weight: bold;
  background: var(--color-background-mute);
}
</style>