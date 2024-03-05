<script setup lang="ts">
import TheIcon from "@/components/TheIcon.vue";
</script>

<template>
  <section class="flex column bd-left main-content">
    <header class="end row bd-bottom">
      <button class="center" type="button">
        <TheIcon name="BiPlus" />
        Session
      </button>
    </header>
    <section class="bd-bottom row">

    </section>

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