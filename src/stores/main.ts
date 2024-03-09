import { useLocalStorage } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'

// stores app-wide state
export const useMainStore = defineStore('main', {
  state: () => ({
    sessions: useLocalStorage('solarize/user-sessions', {} as Record<number, UserSession>),
    statusFilters: ['Active', 'Complete', 'Scheduled'] as SessionStatus[],
    statusFilter: 'Active' as SessionStatus,
    search: '',
    notificationsMap: useLocalStorage('solarize/notifications', {} as Record<string, INotification>)
  }),
  getters: {
    notifications: (state) => Object.values(state.notificationsMap).reverse(),
    hasUnreadImportant(): INotification[] {
      return this.unread.filter((x) => x.type === 'important' && !x.read)
    },
    unread(): INotification[] {
      return this.notifications.filter((x) => !x.read)
    },
    allSessions: (state) => Object.values(state.sessions),
    filteredSessions(state): UserSession[] {
      return this.allSessions.filter(
        (s) =>
          s.status == state.statusFilter &&
          s.customer.toLocaleLowerCase().includes(state.search.trim().toLocaleLowerCase())
      )
    }
  },
  actions: {
    addSession(session: UserSession) {
      const id = session.id ?? this.allSessions.length
      this.sessions[id] = { ...session, id }
      return id
    },
    markAllAsRead() {
      for (const id in this.notificationsMap) {
        this.notificationsMap[id].read = true
      }
    },
    addNotification(notification: INotification) {
      this.notificationsMap[notification.id] = notification
    },
    clearNotifications() {
      this.notificationsMap = {}
    },

    deleteSession(id?: number) {
      delete this.sessions[id as number]
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
