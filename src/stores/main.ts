import { defineStore, acceptHMRUpdate } from 'pinia'

// stores app-wide state
export const useMainStore = defineStore('main', {
  state: () => ({
    sessions: [] as UserSession[],
    statusFilters: ['Active', 'Complete', 'Scheduled'] as SessionStatus[],
    statusFilter: 'Active' as SessionStatus
  }),
  getters: {
    filteredSessions: (state) => state.sessions.filter((s) => s.status === state.statusFilter)
  },
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}
