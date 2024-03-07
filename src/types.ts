import type ThePopup from './components/ThePopup.vue'

// Interface for agent authentication
// global.d.ts

declare global {
  // Interface for agent authentication
  type SessionStatus = 'Active' | 'Complete' | 'Scheduled'
  type SlideType =
    | 'introduction'
    | 'basics'
    | 'customization' // can choose one or not
    | 'confirmation'
    | 'visualization'
    | 'payment'
    | 'services'
    | 'conclusion'
    | 'choice' // compulsory to choose

  interface ICustomization {
    name: string
    description: string
    pricing?: number
    pricingFrequency?: 'one-time' | 'monthly' | 'quarterly' | 'annually'
    exclude?: number[] // excludes some customization from previous step
  }

  interface Slide {
    title: string
    type: SlideType
    customizations?: Record<number, ICustomization> // possible customizations to the previous slide
  }

  type SelectionMap = Record<number, number> // map of slide to all customization selected at that slide
  type Selections = Record<number, number[]>
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
    name: string
  }

  // Interface for user sessions
  interface UserSession {
    customizations: Selections
    slideNumber: number
    progress: number
    customer?: string
    status?: SessionStatus
    id?: number
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
    type: 'email' | 'push' | 'in-app'
    recipient: string
    content: string
    timestamp: Date
  }
}

export {}
