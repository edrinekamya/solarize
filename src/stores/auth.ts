import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    agentId: '',
    loggedIn: false,
    errorMessage: '',
    loading: false
  }),
  getters: {},
  actions: {
    async login() {
      // Simulate authentication logic
      // Add a delay of 2 seconds to simulate lag
      this.loading = true
      setTimeout(() => {
        if (this.agentId === '007') {
          // only give access to James Bond😂😂
          this.loggedIn = true
          this.errorMessage = ''
        } else {
          this.errorMessage = "Sorry you're not James Bond"
        }
        this.loading = false;
      }, 2000)
    },

    logout() {
      this.loggedIn = false
      this.agentId = ''
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
