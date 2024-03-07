import { useLocalStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

// stores app-wide state
export const useMainStore = defineStore('main', {
  state: () => ({
    sessions: useLocalStorage('solarize/sessions', {} as Record<number, UserSession>),
    statusFilters: ['Active', 'Complete', 'Scheduled'] as SessionStatus[],
    statusFilter: 'Active' as SessionStatus
  }),
  getters: {
    allSessions: (state) => Object.values(state.sessions),
    filteredSessions(state): UserSession[] {
      return this.allSessions.filter((s) => true)
    }
  },
  actions: {
    addSession(session: UserSession) {
      const id = session.id ?? this.allSessions.length
      this.sessions[id] = { ...session, id }
      return id
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
