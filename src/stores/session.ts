import { defineStore, acceptHMRUpdate } from 'pinia'

// handles a single opened session in progress
// responsible generating the slide information

export const useSessionStore = defineStore('session', {
 state: () => ({
   
 }),
 getters: {},
 actions: {},
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useSessionStore, import.meta.hot))
}
