// Interface for agent authentication
interface AgentAuthentication {
  agentId: string
  biometricEnabled: boolean
}

interface IAgent{
  name: string
  
} 

// Interface for user sessions
interface UserSession {
  id: string
  agentId: string
  startTime: Date
  endTime: Date | null
  progress: number
  customer: string
  status: SessionStatus
  // Other session-related data
}

type SessionStatus = 'Active' | 'Complete' | 'Scheduled' 

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
