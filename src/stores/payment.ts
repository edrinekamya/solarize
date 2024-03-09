import { useMainStore } from '@/stores/main'
import { useSlideStore } from '@/stores/session'
import { generateId } from '@/util'
import { acceptHMRUpdate, defineStore } from 'pinia'

const MTNIdentifiers = ['6', '7', '8']
const AIRTELIdentifiers = ['0', '4', '5']

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    discount: 0.3,
    isPaymentFormShown: false,
    paymentMethod: 'Card' as PaymentMethod,
    paymentStep: 'Form' as PaymentStep,
    paymentMessage: '',
    error: '',
    phoneNumber: '',
    email: '',
    cvc: '',
    name: '',
    cardNumber: '',
    country: 'Uganda',
    ccExp: '',
    isPaymentProgress: false
  }),

  getters: {
    fullNumber: (state) => '+2567' + state.phoneNumber,
    isMTN: (state) => MTNIdentifiers.includes(state.phoneNumber.charAt(0)),
    isAIRTEL: (state) => AIRTELIdentifiers.includes(state.phoneNumber.charAt(0))
  },
  actions: {
    sendError(error: string) {
      this.error = error
      setTimeout(() => {
        this.error = ''
      }, 2000)
    },
    async processPayment(method: PaymentMethod, provider: PaymentProvider) {
      try {
        this.error = ''
        this.isPaymentProgress = true
        const isMobile = method == 'Mobile'

        // Securing
        this.paymentStep = 'Securing'
        this.paymentMessage = 'Be patient while we secure your payment...'
        await new Promise((resolve) => setTimeout(resolve, 3000))

        // Validating(server-side)
        this.paymentStep = 'Validating'
        this.paymentMessage = isMobile
          ? `Validating your phone number...`
          : 'Validating provided credit card information...'
        await new Promise((resolve) => setTimeout(resolve, 3000))

        const isValid = Math.random() > 0.5
        if (!isValid) {
          this.paymentStep = 'Form'
          this.isPaymentProgress = false
          this.sendError(
            `${isMobile ? `${provider} failed to validate your phone number` : 'Your card could be invalid, expired or not active'}.`
          )
          return
        }

        // Processing
        this.paymentStep = 'Processing'
        this.paymentMessage = 'Processing your payment...'
        await new Promise((resolve) => setTimeout(resolve, 3000))

        const isProcessed = Math.random() > 0.5
        if (!isProcessed) {
          this.paymentStep = 'Form'
          this.isPaymentProgress = false
          this.sendError('Insufficient funds to complete your payment.')
          return
        }

        // Success, reset state
        this.paymentStep = 'Success'
        this.paymentMessage = 'Payment was processed successfully'
        useSlideStore().session.status = 'Complete'
        await new Promise((resolve) => setTimeout(resolve, 1000))
        useSlideStore().nextSlide() // go to thank you

        // send a notification

        // simulate sending important notification to agent 10s later
        const store = useMainStore()
        setTimeout(() => {
          store.addNotification({
            id: generateId(),
            type: 'important',
            
            timestamp: new Date().toISOString(),
            content:
              'The previous session has been completed successfully. An installation of the equipment purchased has been scheduled for 25/04/2024. Please advise the customer accordingly'
          })
        }, 10000)
        setTimeout(() => {
          store.addNotification({
            id: generateId(),
            type: 'push', // Assuming type 'push' represents an unimportant message
            
            timestamp: new Date().toISOString(),
            content: 'Congratulations! You have gained some credits for the recent sale.'
          })
        })
        // compose another un important message a send to the agent, probably about their credits, type: push
        this.paymentStep = 'Form'
        this.error = ''
        this.isPaymentFormShown = false
        this.isPaymentProgress = false
      } catch (error) {
        this.paymentStep = 'Form'
        this.sendError('An unexpected error occurred during the payment process')
      } finally {
        this.isPaymentProgress = false
      }
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaymentStore, import.meta.hot))
}
