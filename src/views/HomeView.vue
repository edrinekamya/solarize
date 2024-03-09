<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheMainContent from '@/components/TheMainContent.vue'

import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { watchEffect } from 'vue'
const auth = useAuthStore()

watchEffect(() => {
  if (!auth.agent.id) {
    router.replace('/login')
  }
})
</script>

<template>
  <main class="flex column">
    <TheHeader />
    <TheMainContent />
  </main>
</template>
