<script setup lang='ts'>
import TheIconButton from '@/components/TheIconButton.vue';
import ThePopup from '@/components/ThePopup.vue';
import { useSlideStore } from '@/stores/session';
import { ref } from 'vue';

defineProps<{ session: UserSession }>()

const popup = ref<Popup>(null)
const slides = useSlideStore();

const deleteSession = () => {

};

const scheduleSession = () => {

};

const editSession = () => {

};

const shareSession = () => {

};

</script>

<template>
  <article @click="slides.startExisting(session)">
    <section class="last-session">
      <div @click.stop class="top row spaced">
        <input type="text" placeholder="Untitled" class="session-name" />
        <TheIconButton @press="popup?.toggle()" name="FaEllipsisV">
          <ThePopup ref="popup">
            <div class="session-options">
              <li class="session-option" @click="deleteSession">Delete</li>
              <li class="session-option" @click="scheduleSession">Schedule</li>
              <li class="session-option" @click="editSession">Edit</li>
              <li class="session-option" @click="shareSession">Share</li>
            </div>
          </ThePopup>
        </TheIconButton>
      </div>
    </section>
    <div class="session-info">
      <div class="row spaced session-progress">
        <span class="session-progress-label">Progress</span>
        <progress :value="session.progress" max="100" class="session-progress-bar"></progress>
      </div>
      <div class="session-date">
        <span class="session-date-label">Last edited</span>
        <!-- <span class="session-date-value">{{ session.date }}</span> -->
      </div>
      <div class="session-status">
        <span class="session-status-label">Status</span>
        <span class="session-status-value" :class="session.status">{{ session.status }}</span>
      </div>
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
  background: var(--color-background-soft);
  border-radius: 16px;
}

.last-session>.top {
  position: absolute;
  width: 100%;
  padding: 16px;
  padding-right: 12px;
}

.session-info {
  padding: 16px;
}
</style>