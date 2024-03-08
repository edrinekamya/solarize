import { useLocalStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

// stores app-wide state
export const useMainStore = defineStore('main', {
  state: () => ({
    sessions: useLocalStorage('solarize/sessions', {} as Record<number, UserSession>),
    statusFilters: ['Active', 'Complete', 'Scheduled'] as SessionStatus[],
    statusFilter: 'Active' as SessionStatus,
    search: '',
    notifications: [] as INotification[]
  }),
  getters: {
    allSessions: (state) => Object.values(state.sessions),
    filteredSessions(state): UserSession[] {
      return this.allSessions.filter((s) => s.status == state.statusFilter && s.customer.toLocaleLowerCase().includes(state.search.trim().toLocaleLowerCase()))
    }
  },
  actions: {
    addSession(session: UserSession) {
      const id = session.id ?? this.allSessions.length
      this.sessions[id] = { ...session, id }
      return id
    },
    addNotification(notification: INotification) {
      this.notifications.push(notification)
    },
    deleteSession(id?: number) {
      delete this.sessions[id as number];
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
