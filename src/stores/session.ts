import { slideShow } from '@/data'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useSlideStore = defineStore('session', {
  state: () =>
    ({
      session: {
        id: undefined as number | undefined,
        slideNumber: 0,
        progress: 0,
        customer: 'Untitled',
        paymentPlan: undefined as PaymentPlan | undefined,
        customizations: {} as Customizations,
        cost: {} as Costs,
        status: 'Active' as SessionStatus
      },
      slides: slideShow,
      isOnGoing: false
    }) as { session: UserSession; isOnGoing: boolean; slides: SlideShow },
  getters: {
    currentSlide: (state) => state.slides[state.session.slideNumber],
    discountedCost(): number {
      const discount = this.session.paymentPlan ? this.session.paymentPlan.discount : 0
      return this.totalCost * (1 - discount)
    },
    totalCost(state) {
      const values = Object.values(state.session.cost).flatMap((x) => Object.values(x))
      return values.length ? values.reduce((a, b) => a + b) : 0
    },
    numOfSlides: (state) => Object.keys(state.slides).length,
    isLast(): boolean {
      return this.currentSlide.type == 'conclusion'
    },
    
    hideNext(state): boolean {
      return (
        this.currentSlide.type == 'confirmation' ||
        state.session.slideNumber === this.numOfSlides - 1 ||
        (this.currentSlide.type === 'choice' &&
          !state.session.customizations[this.session.slideNumber]) ||
        (this.currentSlide.type === 'payment-method' && !state.session.paymentPlan) ||
        this.session.slideNumber > 9
      )
    }
  },
  actions: {
    // starts a new session
    startNew() {
      this.$reset()
      this.isOnGoing = true
    },
    close() {
      this.isOnGoing = false
    },

    // hydrate from an existing session map
    startExisting(session: UserSession) {
      this.session = session
      this.isOnGoing = true
    },

    schedule() {
      this.session.status == 'Scheduled'
      this.close()
    },

    // meant to go to a previous slide
    goToSlide(n: number) {
      this.session.slideNumber = n
    },

    addCustomization(slideNumber: number, customization: number, type: SlideType, price?: number) {
      if (price) {
        if (!this.session.cost[slideNumber]) {
          this.session.cost[slideNumber] = {}
        }
        this.session.cost[slideNumber][customization] = price
      }
      if (type === 'choice') {
        this.session.customizations[slideNumber] = [customization]
      } else {
        if (!this.session.customizations[slideNumber]) {
          this.session.customizations[slideNumber] = []
        }
        if (this.session.customizations[slideNumber].includes(customization)) {
          this.session.customizations[slideNumber] = this.session.customizations[
            slideNumber
          ].filter((x) => x != customization)
        } else {
          this.session.customizations[slideNumber].push(customization)
        }
      }
    },

    nextSlide() {
      this.session.slideNumber += 1
      if (this.session.progress < this.session.slideNumber) {
        this.session.progress += 1
      }
    },

    // should go back one level
    previousSlide() {
      this.session.slideNumber = Math.max(0, this.session.slideNumber - 1)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSlideStore, import.meta.hot))
}
