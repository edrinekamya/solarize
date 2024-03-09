import { slideShow } from '@/data'
import { acceptHMRUpdate, defineStore } from 'pinia'

interface Savings {
  baseSavings: string
  baseROI: string
  newSavings: string
  newROI: string
}

export const useSlideStore = defineStore('session', {
  state: (): { session: UserSession; isOnGoing: boolean; slides: SlideShow } => ({
    session: {
      id: undefined as number | undefined,
      slideNumber: 0,
      progress: 0,
      customer: 'Untitled',
      paymentPlan: undefined as PaymentPlan | undefined,
      customizations: {} as Customizations,
      cost: {} as Costs,
      status: 'Active' as SessionStatus,
      lastOpened: new Date().toISOString(),
      sunlightHours: 0,
      electricityCost: 0,
      solarSpace: 0,
      savings: {}
    },
    slides: slideShow,
    isOnGoing: false
  }),
  getters: {
    currentSlide: (state) => state.slides[state.session.slideNumber],
    discountedCost(): number {
      const discount = this.session.paymentPlan ? this.session.paymentPlan.discount : 0
      return this.totalCost * (1 - discount)
    },
    savingsAndROI(state): Savings {
      const electricalCost = state.session.electricityCost
      const baseSavings = state.session.sunlightHours * this.panelOutput * electricalCost
      const baseROI = (baseSavings / this.totalCost) * 100

      const values = Object.values(state.session.savings)

      const totalCost = values
        .map((x) => (x.savings == undefined ? x.pricing ?? 0 : 0))
        .reduce((a, b) => a + b)
      const addOnCost = values.map((x) => (x.savings ? x.pricing ?? 0 : 0)).reduce((a, b) => a + b)

      const addOnSavings = values.map((x) => x.savings ?? 0).reduce((a, b) => a + b)

      // Calculate new savings with add-ons
      const newSavings = baseSavings + addOnSavings * electricalCost
      const newTotalCost = totalCost + addOnCost
      const newROI = (newSavings / newTotalCost) * 100

      // Return results
      return {
        baseSavings: baseSavings.toFixed(2),
        baseROI: baseROI.toFixed(2) + '%',
        newSavings: newSavings.toFixed(2),
        newROI: newROI.toFixed(2) + '%'
      }
    },
    panelOutput: (state) => {
      const panelType = state.session.savings[0]
      return panelType && panelType.output ? panelType.output : 0
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
        (this.currentSlide.type === 'payment-plan' && !state.session.paymentPlan) ||
        this.session.slideNumber > 10
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

    addCustomization(
      slideNumber: number,
      type: SlideType,
      customization: ICustomization,
      customizationId: number
    ) {
      this.session.savings[customizationId] = customization
      if (customization.pricing) {
        if (!this.session.cost[slideNumber]) {
          this.session.cost[slideNumber] = {}
        }
        this.session.cost[slideNumber][customizationId] = customization.pricing
      }
      if (type === 'choice') {
        this.session.customizations[slideNumber] = [customizationId]
      } else {
        if (!this.session.customizations[slideNumber]) {
          this.session.customizations[slideNumber] = []
        }
        if (this.session.customizations[slideNumber].includes(customizationId)) {
          this.session.customizations[slideNumber] = this.session.customizations[
            slideNumber
          ].filter((x) => x != customizationId)
        } else {
          this.session.customizations[slideNumber].push(customizationId)
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
