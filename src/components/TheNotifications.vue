<script setup lang="ts">
import TheIconButton from '@/components/TheIconButton.vue'
import ThePopup from '@/components/ThePopup.vue'
import { notifications } from '@/data'
import { useMainStore } from '@/stores/main'
import { generateId } from '@/util'
import { computed, onMounted, ref } from 'vue'

const notificationPopup = ref<any>(null)
const main = useMainStore()
const store = useMainStore()

const unread = computed(() => main.unread.length)
const hasNotifications = computed(() => main.notifications.length)

// Function to send a random notification
function sendRandomNotification() {
  // Select a random notification
  const notification = notifications[Math.floor(Math.random() * notifications.length)]

  // Generate dynamic content if necessary
  let content
  if (notification.content.length === 1) {
    // Generate random points for the bonus points notification
    const points = Math.floor(Math.random() * 100) + 1
    content = notification.content(String(points))
  } else if (notification.content.length === 2) {
    // Generate a random customer name and session ID for the quote request notification
    const customerName = `Customer ${Math.floor(Math.random() * 1000) + 1}`
    const sessionId = `Session ${Math.floor(Math.random() * 10000) + 1}`
    content = notification.content(customerName, sessionId)
  } else {
    content = notification.content()
  }

  // Add the notification to the store
  store.addNotification({
    id: generateId(),
    type: notification.isDynamic ? 'important' : 'push',
    timestamp: new Date().toISOString(),
    content: content
  })

  // Schedule the next notification
  if (main.notifications.length < 5) {
    const nextNotificationDelay = Math.random() * (10 - 5) + 5 // Random delay between 5 and 10 minutes
    setTimeout(sendRandomNotification, nextNotificationDelay * 60 * 1000)
  }
}

onMounted(() => {
  // Start sending notifications
  sendRandomNotification()
})

function open() {
  if (notificationPopup.value) {
    notificationPopup.value.toggle()
  }
}
</script>

<template>
  <ThePopup @close="main.markAllAsRead" ref="notificationPopup">
    <template #trigger>
      <div class="notification-icon">
        <span v-if="unread" class="notification-badge center">{{ unread }}</span>
        <TheIconButton :scale="1.5" name="md-notifications-outlined" @press="open" />
      </div>
    </template>
    <div class="notification-popup column gap">
      <div class="bd-bottom row spaced">
        <h3 class="center">Notifications</h3>
        <TheIconButton
          v-if="hasNotifications"
          @press="main.clearNotifications"
          name="MdDeleteforeverRound"
        />
      </div>

      <TransitionGroup v-if="hasNotifications" name="list">
        <li
          v-for="notification in main.notifications"
          :class="{ unread: !notification.read }"
          :key="notification.id"
        >
          {{ notification.content }}
        </li>
      </TransitionGroup>

      <div class="flex center" v-else><span>No notifications</span></div>
    </div>
  </ThePopup>
</template>

<style scoped>
.notification-popup {
  width: 40vh;
  height: 50vh;
  overflow: auto;
}

.notification-icon {
  position: relative;
}

li {
  font-size: 12px;
  list-style-type: none;
}

li.unread {
  color: var(--color-text-1);
  list-style-type: disc;
}

.notification-badge {
  position: absolute;
  background: red;
  top: 0;
  right: 4px;
  font-size: 8px;
  border-radius: 25px;
  height: 13px;
  width: 13px;
}
</style>
