import type ThePopup from './components/ThePopup.vue'

// Interface for agent authentication
// global.d.ts

declare global {
  // Interface for agent authentication
  type SessionStatus = 'Active' | 'Complete' | 'Scheduled'
  type SlideType =
    | 'introduction'
    | 'basics'
    | 'form'
    | 'payment-plan'
    | 'customization' // can choose one or not
    | 'confirmation'
    | 'visualization'
    | 'payment'
    | 'payment-method'
    | 'services'
    | 'conclusion'
    | 'choice' // compulsory to choose

  interface ICustomization {
    name: string
    description: string
    pricing?: number
    output?: number
    savings?: number
    image?: string
    pricingFrequency?: 'one-time' | 'monthly' | 'quarterly' | 'annually'
    exclude?: number[] // excludes some customization from previous step
  }

  type PaymentPlan = {
    name: string
    discount: number
    description: string
    duration: number
  }

  interface Slide {
    title: string
    type: SlideType
    customizations?: Record<number, ICustomization> // possible customizations to the previous slide
  }

  type PaymentMethod = 'Card' | 'Mobile'
  type PaymentStep = 'Form' | 'Securing' | 'Validating' | 'Processing' | 'Success'
  type PaymentProvider = 'MTN' | 'AIRTEL' | 'VISA' | 'MASTERCARD' | 'AMEX'

  type Customizations = Record<number, number[]>
  type SlideShow = Record<number, Slide>
  type NumberRecord = Record<number, number>

  type Costs = Record<number, NumberRecord>

  type Popup = typeof ThePopup | null

  interface AgentAuthentication {
    agentId: string
  }

  interface ISlide {
    type: SlideType
    destinations: ISlide[]
  }

  interface IAgent {
    id: string
    name: string
  }

  interface CustomizationSaving {
    name: string
    saving: number
  }

  // Interface for user sessions
  interface UserSession {
    customizations: Customizations
    slideNumber: number
    progress: number
    customer: string
    paymentPlan?: PaymentPlan
    cost: Costs
    status: SessionStatus
    id?: number
    lastOpened: string
    sunlightHours: number
    electricityCost: number
    solarSpace: number
    savings: Record<number,ICustomization>
  }

  // Interface for individual slide content
  interface SlideContent {
    slideType: string
    content: string
    customizationOptions: string[]
  }

  // Interface for notifications
  interface INotification {
    id: string
    type: 'email' | 'push' | 'in-app' | 'important'
    content: string
    timestamp: string
    read?: boolean
  }
}

export {}
