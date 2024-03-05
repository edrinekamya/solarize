<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheMainContent from '@/components/TheMainContent.vue';
</script>

<template>
  <main>
    <TheHeader />
    <TheMainContent />
    <aside class="right-aside">
    </aside>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
}

.right-aside {
  grid-column: 1;
  grid-row: 2;
  min-width: 48px;
}

</style>
