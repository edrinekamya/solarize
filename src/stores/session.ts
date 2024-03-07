import { slideShow } from '@/data'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSlideStore = defineStore('session', {
  state: () => ({
    isOnGoing: false,
    id: undefined as number | undefined,
    slideNumber: 0,
    progress: 0,
    customizations: {} as Selections,
    status: 'Active' as SessionStatus,
    slides: slideShow,
    timeElapsed: Date // the elapsed time since this session was started,
  }),
  getters: {
    currentSlide: (state) => state.slides[state.slideNumber],
    numOfSlides: (state) => Object.keys(state.slides).length,
    session: ({ progress, slideNumber, customizations, id }) => ({
      progress,
      slideNumber,
      customizations,
      id
    }),
    hideNext(state): boolean {
      return (
        this.currentSlide.type == 'confirmation' ||
        state.slideNumber === this.numOfSlides - 1 ||
        (this.currentSlide.type === 'choice' && !state.customizations[this.slideNumber])
      )
    }
  },
  actions: {
    // starts a new session
    startNew() {
      this.$reset()
      this.isOnGoing = true
    },

    // hydrate from an existing session map
    startExisting(session: UserSession) {
      this.$reset()
      this.$patch(session)
      this.isOnGoing = true
    },

    // meant to go to a previous slide
    goToSlide(n: number) {
      this.slideNumber = n
    },

    addCustomization(customization: number, type: SlideType) {
      if (type === 'choice') {
        this.customizations[this.slideNumber] = [customization]
      } else {
        if (!this.customizations[this.slideNumber]) {
          this.customizations[this.slideNumber] = []
        }
        if (this.customizations[this.slideNumber].includes(customization)) {
          this.customizations[this.slideNumber] = this.customizations[this.slideNumber].filter(
            (x) => x != customization
          )
        } else {
          this.customizations[this.slideNumber].push(customization)
        }
      }
    },

    nextSlide() {
      this.slideNumber += 1
      if (this.progress < this.slideNumber) {
        this.progress += 1
      }
    },

    // should go back one level
    previousSlide() {
      this.slideNumber = Math.max(0, this.slideNumber - 1)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSlideStore, import.meta.hot))
}
