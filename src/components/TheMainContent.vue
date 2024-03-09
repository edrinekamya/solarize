<script setup lang="ts">
import TheFilterButton from "@/components/TheFilterButton.vue";
import TheIcon from "@/components/TheIcon.vue";
import TheSessionCard from "@/components/TheSessionCard.vue";
import TheSlideShow from "@/components/TheSlideShow.vue";
import { useMainStore } from "@/stores/main";
import { useSlideStore } from "@/stores/session";

const store = useMainStore()
const session = useSlideStore();

</script>

<template>
  <TheSlideShow />
  <section class="flex column bd-left main-content">
    <section class="flex column" v-if="store.allSessions.length">
      <header class="spaced row bd-bottom">
        <section class="row gap">
          <TheFilterButton v-for="status in store.statusFilters" :key="status" :status='status' />
        </section>
        <button @click="session.startNew" class="center" type="button">
          <TheIcon name="BiPlus" />
          Session
        </button>
      </header>
      <section class="session-cards">
        <TransitionGroup name="list">
          <TheSessionCard v-for="s in store.filteredSessions" :key="s.id" :session="s" />
        </TransitionGroup>
      </section>
    </section>

    <section v-else class="empty flex column center">
      <h1>No previous sessions</h1>
      <p>Start a new user session</p>
      <button @click="session.startNew" class="start-session-button">
        <TheIcon name="BiPlus" />
        Session
      </button>
    </section>
  </section>
</template>

<style scoped>
.empty {
  border: 1px dashed var(--color-border);
  margin: 32px;
  background: var(--color-background-soft);
  border-radius: 16px
}

.empty h1 {
  font-size: 28px;
  font-weight: bold;
  color: var(--color-text-1);
}

.empty p {
  margin-bottom: 10px;
}

.empty button {
  height: 40px;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 40px;
}

.main-content {
  overflow: auto;
}

header {
  padding: 8px;
}

.session-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 500px));
  grid-gap: 16px;
  padding: 16px;
  overflow: auto;
}
</style>