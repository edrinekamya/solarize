<script setup lang="ts">
import TheFilterButton from "@/components/TheFilterButton.vue";
import TheIcon from "@/components/TheIcon.vue";
import { useMainStore } from "@/stores/main";

const store = useMainStore()

</script>

<template>
  <section class="flex column bd-left main-content">
    <section>
    </section>
    <header class="spaced row bd-bottom">
      <section class="row gap">
        <TheFilterButton v-for="status in store.statusFilters" :key="status" :status='status' />
      </section>
      <button class="center" type="button">
        <TheIcon name="BiPlus" />
        Session
      </button>
    </header>

  </section>
</template>

<style scoped>
.main-content {
  display: flex;
  grid-column: 2;
}

header {
  padding: 8px;
}
</style>