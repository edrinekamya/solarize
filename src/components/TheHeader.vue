<script setup lang="ts">
import TheIconButton from "@/components/TheIconButton.vue";
import TheLogo from "@/components/TheLogo.vue";
import ThePopup from "@/components/ThePopup.vue";
import { ref } from "vue";

const searchQuery = ref("");
const notifications = ref<INotification[]>([]);
const notificationPopup = ref<typeof ThePopup | null>(null);
const userPopup = ref(null);
const agent = ref<IAgent>();

</script>

<template scoped>
  <header class="header row spaced bd-bottom">
    <section class="row gap">
      <TheLogo :size="24" />
      <span class="name">Solarize</span>
    </section>
    <section class="row bd search-bar">
      <v-icon class="icon" name="co-search" />
      <input class="search-input" v-model="searchQuery" type="text" placeholder="Find sessions" />
    </section>
    <div class="row gap">
      <div>
        <span v-if="notifications.length > 0" class="notification-badge">{{ notifications.length }}</span>
        <TheIconButton name="md-notifications-outlined" @press="notificationPopup?.toggle()" />
        <ThePopup ref="notificationPopup">
          <p>Hello word. This is a long as text right here</p>
          <div v-if="notificationPopup" class="bd notification-popup">
            <ul>
              <li v-for="notification in notifications" :key="notification.id">
                {{ notification.content }}
              </li>
            </ul>
          </div>
        </ThePopup>
      </div>
      <div>
        <div class="center avatar">A</div>
        <ThePopup ref="userPopup">
          <div class="user-popup">
            <p>{{ agent?.name }}</p>
            
          </div>
        </ThePopup>
      </div>
    </div>
  </header>
</template>

<style scoped>
.search-bar {
  padding: 4px 8px;
  border-radius: 8px;
}

.search-bar:hover {
  border: 2px solid indigo;
}

.search-bar:hover>.icon{
  color: indigo;
}

input {
  background: transparent;
  border-width: 2;
}

.header {
  padding: 8px;
  grid-column: span 2;
}

.avatar {
  width: 32px;
  height: 32px;
  background: indigo;
  border-radius: 32px;
  cursor: pointer;
}

.avatar:hover {
  background: rgb(61, 3, 102);
}

</style>