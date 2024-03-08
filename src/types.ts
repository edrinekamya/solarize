import type ThePopup from './components/ThePopup.vue'

// Interface for agent authentication
// global.d.ts

declare global {
  // Interface for agent authentication
  type SessionStatus = 'Active' | 'Complete' | 'Scheduled'
  type SlideType =
    | 'introduction'
    | 'basics'
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

  type SelectionMap = Record<number, number> // map of slide to all customization selected at that slide
  type Customizations = Record<number, number[]>
  type SlideShow = Record<number, Slide>

  type Popup = typeof ThePopup | null

  interface AgentAuthentication {
    agentId: string
    biometricEnabled: boolean
  }

  interface ISlide {
    type: SlideType
    destinations: ISlide[]
  }

  interface IAgent {
    id: string
    name: string
  }

  type ICost = Record<number, number>

  type Costs = Record<number, ICost>

  // Interface for user sessions
  interface UserSession {
    customizations: Customizations
    slideNumber: number
    progress: number
    customer: string
    paymentPlan: PaymentPlan
    cost: Costs
    status: SessionStatus
    id?: number
    lastOpened:string
  }

  // Interface for individual slide content
  interface SlideContent {
    slideType: string
    content: string
    customizationOptions: string[]
  }

  // Interface for user progress within a session
  interface SessionProgress {
    currentSlideIndex: number
    totalSlides: number
    completionPercentage: number
  }

  // Interface for solar solution customization options
  interface SolarCustomization {
    [customizationCategory: string]: string[]
  }

  // Interface for solar solution data
  interface SolarSolution {
    solutionName: string
    panelTypes: string[]
    customizations: SolarCustomization
    // Other solution-related data
  }

  // Interface for notifications
  interface INotification {
    id: string
    type: 'email' | 'push' | 'in-app' | 'important'
    recipient: string
    content: string
    timestamp: string
    read?: boolean
  }
}

export {}
