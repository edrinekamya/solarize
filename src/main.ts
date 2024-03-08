import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  CoSearch,
  MdNotificationsOutlined,
  BiPlus,
  MdError,
  MdDeleteforeverRound,
  HiSolidArrowCircleRight,
  HiSolidArrowCircleLeft,
  MdCancelRound,
  BiCalculator,
  FaSpinner,
  FaCogs,
  BiCheckCircleFill,
  FaLock,
  MdVerifieduserRound,
  FcCellPhone,
  FcLibrary,
  MdLogoutRound
} from 'oh-vue-icons/icons'

addIcons(
  CoSearch,
  MdNotificationsOutlined,
  BiPlus,
  MdError,
  MdDeleteforeverRound,
  HiSolidArrowCircleRight,
  HiSolidArrowCircleLeft,
  MdCancelRound,
  BiCalculator,
  FaSpinner,
  FaCogs,
  BiCheckCircleFill,
  FaLock,
  MdVerifieduserRound,
  FcCellPhone,
  FcLibrary,
  MdLogoutRound
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')

/**
 * APP CONCEPT
 * AUTH
 *  each agent has a unique agentId provided by the company
 *  this agentId identifies an agent and all their associated work
 *  it's singly sufficient to login into the app
 *  it could be revoked anytime, at which point the agent loses access to the account
 *  it could be reassigned to other agents and the new agent would have access to all the previous user sessions
 *
 *  IF NOT WEB: The tab or device could be pre-configured with authentication in which case we use biometric prints to protect the data
 *
 * FUNCTIONALITY
 * SESSIONS:
 *  The app is made up of user sessions
 *  A session stores all the information about the interaction between the user and the agent
 *  It stores current progress of the interaction including customizations, choices, slides covered
 *  It's a recoverable, can be played forwards or backwards and has a start and stop
 *  Sessions are created and saved automatically for every **WILLING / POSITIVE** potential customer session past the introductory slides.
 *  WILLING: means the customer is willing to engage the agent
 *  Ideally a SESSION is a snapshot of a point in time of an interaction between the agent and the User
 *  Sessions are attached to agentIds and loaded from the backend on app startup
 *
 * SLIDES:
 *  A slide is an interactive presentation in a user session
 *  It allows for teaching, choices, customizations etc. of the customer
 *  Number of slides is dynamic but not infinite, ideally each customization might lead to different future slide but eventually all slides end
 *  There's a systematic high level flow of the slides but additional slides maybe added for some customizations
 *
 *  INTRODUCTION -> TEACHING -> (IF USER INTERESTED) -> CHOICE OF SOLAR TYPES/PLANS ETC -> CUSTOMIZATION AND VISUALIZATION -> INITIATE INSTALLATION/PAYMENT
 *
 *  All possible states are predefined
 *
 * CHOICES:
 *
 *
 * CUSTOMIZATION:
 *
 * VISUALIZATION:
 *
 * PAYMENT:
 *
 *
 * NOTIFICATIONS:
 *
 *
 */

/**
 * AUTHENTICATION FEATURE IMPLEMENTATION AND DESIGN SUMMARY:
 *
 * Authentication Page:
 * - Design: Clean and simple layout with prominent input field for agentId and login button.
 * - Layout: Input field centered on screen, login button positioned below with clear labels.
 * - Animations: Subtle fade-in effect for input field on page load to draw attention.
 * - Transitions: Smooth transition to main dashboard upon successful login.
 *
 * Biometric Authentication (If Applicable):
 * - Design: Incorporate visual indicators for biometric authentication availability.
 * - Layout: Place biometric authentication option near login button for easy access.
 * - Animations: Gentle pulsing animation on biometric authentication option for visual appeal.
 * - Transitions: Seamless transition between biometric authentication and manual input methods.
 *
 * Error Handling:
 * - Design: Clear and concise error messages displayed below input field with contrasting colors.
 * - Layout: Error messages stand out against background for easy identification.
 * - Animations: Implement subtle shake effect on input field for incorrect credentials.
 * - Transitions: Smooth transition between error states and normal login state, with option to retry authentication.
 */

/**
 * DASHBOARD FEATURE IMPLEMENTATION AND DESIGN SUMMARY:
 *
 * Dashboard Page:
 * - Design: Clean and modern layout with light color scheme, featuring navigation sidebar, widgets, and notification panel.
 * - Layout: Navigation sidebar positioned on the left, main content area divided into flexible grid columns for widgets.
 * - Responsiveness: Navigation sidebar collapses into hamburger menu on smaller screens, widgets stack vertically to conserve space.
 * - Components: Navigation Sidebar, Widgets, Notification Panel with defined functionality and interactive elements.
 * - Animations: Subtle hover effects, fade-in animations for widgets, and smooth transitions for opening/closing sidebar.
 */

/**
 * SESSION CARD COMPONENT IMPLEMENTATION AND DESIGN SUMMARY:
 *
 * Session Card:
 * - Design: Visually appealing layout with relevant session information presented clearly.
 * - Layout: Organized structure with logical arrangement of session details and effective use of whitespace.
 * - Responsiveness: Adapts seamlessly to different screen sizes and orientations using responsive design techniques.
 * - Interactivity: Includes interactive elements for actions like editing or deleting sessions, with hover effects for feedback.
 * - Components: Date, Customer Name, Session Status, Notes, with emphasis on clarity and readability.
 * - Animations: Subtle animations applied for visual appeal and feedback during user interactions.
 * - Accessibility: Ensures accessibility of session card elements for all users, including screen readers and keyboard navigation.
 */

/**
 * SEARCH AND FILTERING FEATURE IMPLEMENTATION AND DESIGN SUMMARY:
 *
 * Search and Filtering:
 * - Design: Intuitive UI with prominent search bar and filtering options for easy session navigation.
 * - Functionality: Live search with real-time results, filtering based on session status and other criteria.
 * - Layout: Search bar positioned prominently at the top, filtering options adjacent or below for accessibility.
 * - Responsiveness: Responsive design adapting to different screen sizes and orientations while maintaining accessibility.
 * - Interactivity: Immediate feedback on search queries and applied filters, with interactive elements for clearing and resetting.
 * - Accessibility: Ensures accessibility of search and filtering controls for all users, including screen readers and keyboard navigation.
 * - Performance: Optimized search and filtering algorithms for efficient handling of large datasets and responsive user experience.
 */

/**
 * REPORTS INTEGRATION ON DASHBOARD DESIGN SUMMARY:
 *
 * Reports Integration:
 * - Design: Visually distinct section with tabbed interface or sidebar navigation for organizing different types of reports.
 * - Layout: Dedicated section or panel for displaying reports, logically arranged with clear labels and descriptions.
 * - Responsiveness: Responsive design adapting to various screen sizes and orientations for optimal viewing experience.
 * - Interactivity: Interactive elements within reports for data exploration, tooltips, and export options for enhanced usability.
 * - Components: Chart Components (bar charts, line graphs, pie charts), Table Components for tabular data, Report Navigation controls.
 * - Accessibility: Ensures accessibility of reports for all users, including assistive technologies and keyboard navigation.
 * - Performance: Optimized report rendering and data retrieval for improved loading times and responsiveness.
 */

/**
 * SESSION MODEL PROPOSAL:
 *
 * Session:
 * - Session ID: string (unique identifier)
 * - Agent ID: string (identifier of the agent)
 * - User ID: string (identifier of the user)
 * - Date and Time: datetime
 * - Status: string (e.g., "Scheduled", "In Progress", "Completed")
 * - Duration: string (formatted duration)
 * - Notes: string (additional notes or comments)
 * - Customizations: array of objects {type: string, value: any} (details of customizations)
 * - Actions: array of strings (log of actions taken during the session)
 * - Feedback: string (feedback provided by user or agent)
 * - Attachments: array of strings (file paths or URLs of attachments)
 */

