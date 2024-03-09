import { useLocalStorage } from '@vueuse/core'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    errorMessage: '',
    agentId: '',
    loading: false,
    agent: useLocalStorage('solarize/auth', {} as IAgent)
  }),
  getters: {},
  actions: {
    async login() {
      // Simulate authentication logic
      // Add a delay of 1 seconds to simulate lag
      this.loading = true
      setTimeout(() => {
        if (this.agentId === '007') {
          // only give access to James Bond😂😂
          this.agent = {
            id: this.agentId,
            name: 'James Bond'
          }
          this.errorMessage = ''
        } else {
          this.errorMessage = "Sorry you're not James Bond"
        }
        this.loading = false
      }, 1000)
    },

    logout() {
      this.agent = {} as IAgent
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
