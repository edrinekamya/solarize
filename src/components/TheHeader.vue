<script setup lang="ts">
import TheIcon from '@/components/TheIcon.vue'
import TheLogo from '@/components/TheLogo.vue'
import TheNotifications from '@/components/TheNotifications.vue'
import ThePopup from '@/components/ThePopup.vue'
import { useAuthStore } from '@/stores/auth'
import { useMainStore } from '@/stores/main'
import { ref } from 'vue'

const userPopup = ref<any>(null)
const auth = useAuthStore()
const main = useMainStore()
</script>

<template scoped>
  <header class="header row spaced bd-bottom">
    <section class="row gap">
      <TheLogo :size="24" />
      <span class="name">Solarize</span>
    </section>
    <section class="row bd search-bar">
      <v-icon class="icon" name="co-search" />
      <input class="search-input" v-model="main.search" type="text" placeholder="Find sessions" />
    </section>
    <div class="row gap">
      <TheNotifications />
      <ThePopup ref="userPopup">
        <template #trigger>
          <div @click.stop="userPopup?.toggle()" class="center avatar">
            {{ auth.agent.name[0] }}
          </div>
        </template>
        <div class="column user-popup">
          <div class="center column top">
            <div class="big-avatar center">{{ auth.agent.name[0] }}</div>
            <h2>#{{ auth.agent.id }}</h2>
            <p>{{ auth.agent.name }}</p>
          </div>
          <div class="bottom bd-top">
            <section @click="auth.logout" class="row gap logout">
              <TheIcon name="MdLogoutRound" />
              <p>Logout</p>
            </section>
          </div>
        </div>
      </ThePopup>
    </div>
  </header>
</template>

<style scoped>
.logout {
  padding: 10px;
  cursor: pointer;
}

.logout:hover,
.logout:active {
  background: indigo;
  color: white;
}

.big-avatar {
  width: 64px;
  height: 64px;
  background: indigo;
  border-radius: 64px;
  font-size: 24px;
  font-weight: bold;
}

.user-popup > .top {
  align-self: center;
  padding: 16px;
}

.user-popup > .bottom {
  padding: 10px 0px;
}

.top > p {
  color: var(--color-text-1);
  font-weight: bold;
}

.search-bar {
  padding: 4px 8px;
  border-radius: 8px;
}

.search-bar:hover {
  border: 2px solid indigo;
}

.search-bar:hover > .icon {
  color: indigo;
}

input {
  background: transparent;
  border-width: 2;
}

.header {
  padding: 8px;
}

.user-popup {
  width: 40vh;
}

.avatar {
  width: 32px;
  height: 32px;
  background: indigo;
  color: white;
  border-radius: 32px;
  cursor: pointer;
}

.avatar:hover {
  background: rgb(61, 3, 102);
}
</style>
