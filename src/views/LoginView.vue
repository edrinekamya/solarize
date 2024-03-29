<script setup lang="ts">
import TheErrorMessage from '@/components/TheErrorMessage.vue'
import TheIcon from '@/components/TheIcon.vue'
import TheLogo from '@/components/TheLogo.vue'
import { useAuthStore } from '@/stores/auth'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

watchEffect(() => {
  // auto -hide error
  if (auth.errorMessage) {
    setTimeout(() => {
      auth.errorMessage = ''
    }, 2000)
  }
  if (auth.agent.id) {
    router.replace('/')
  }
})
</script>

<template>
  <div class="auth-page">
    <div class="auth-container">
      <TheLogo :size="125" />
      <h1 class="auth-title">Solarize</h1>
      <p class="auth-description">The ultimate app for solar energy management</p>
      <input
        :disabled="auth.loading"
        v-model="auth.agentId"
        type="text"
        placeholder="Enter your agent ID"
        class="auth-input"
        @keyup.enter="auth.login"
      />
      <button
        type="submit"
        class="auth-button"
        @click="auth.login"
        :disabled="!auth.agentId || auth.loading"
      >
        <TheIcon v-if="auth.loading" name="FaSpinner" animation="spin" />Login
      </button>
      <TheErrorMessage :error-message="auth.errorMessage" />
      <p class="auth-helper">
        If you have forgotten your agent ID, please contact the company.
        <a href="#" class="auth-link">Learn more</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.auth-container {
  width: 400px;
  max-width: 90%;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-background-soft);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.auth-title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: var(--color-accent-3);
}

.auth-description {
  font-size: 24px;
  text-align: center;
}

.auth-input {
  width: 100%;
  height: 48px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  text-align: center;
  background: var(--color-background);
}

.auth-button {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  margin-bottom: 4px;
}

.auth-helper {
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}

.auth-link {
  color: #0078d4;
  text-decoration: none;
}

.auth-link:hover {
  text-decoration: underline;
}
</style>
