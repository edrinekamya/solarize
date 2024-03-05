# solarize

## APP CONCEPT

1. **Authentication:**
   - Agents are provided with a unique agentId, which serves as their login credential.
   - Upon launching the app, agents input their agentId to access their account.
   - The agentId is securely stored and encrypted to ensure data privacy and protection.
   - If the app is not web-based, authentication can be seamlessly integrated with device biometrics for added security.
   - Revoking access to an agentId instantly disables the agent's login credentials, ensuring immediate account termination if necessary.
   - Reassigning agentIds allows for smooth transitions between agents, ensuring continuity of user sessions and interactions.

2. **User Sessions:**
   - Each user interaction with an agent is encapsulated within a session, providing a comprehensive record of the engagement.
   - Sessions capture all relevant information, including user preferences, customizations, and choices made during the interaction.
   - Users can resume sessions from any point in time, allowing for seamless continuation of discussions and customization processes.
   - Sessions are stored securely on the backend server, ensuring data integrity and accessibility across devices.
   - Automatic session creation eliminates the need for manual intervention, ensuring no interaction is overlooked or lost.

3. **Slides:**
   - Slides serve as the building blocks of the interactive presentation within user sessions.
   - Each slide represents a distinct stage or topic within the interaction flow, guiding users through the solar adoption journey.
   - Dynamic slide progression ensures users receive relevant information based on their preferences and interests.
   - Additional slides can be dynamically generated based on user input, allowing for personalized and tailored interactions.
   - The app tracks user progress through slides, enabling agents to gauge user engagement and tailor their approach accordingly.

4. **Choices:**
   - Throughout the interaction, users are presented with choices that influence the progression of the session.
   - Choices prompt users to make decisions on various aspects of their solar solution, such as panel types, financing options, and installation preferences.
   - The app dynamically adjusts slide content based on user choices, providing personalized recommendations and guidance.
   - Agents can leverage user choices to customize their pitch and address specific user concerns or preferences.
   - Choice tracking allows agents to monitor user preferences and adapt their approach to maximize engagement and satisfaction.

5. **Customization:**
   - Customization features empower users to tailor their solar solutions to meet their unique needs and preferences.
   - Users can select from a range of customization options, including panel types, sizes, mounting configurations, and more.
   - Real-time feedback and visualization tools assist users in understanding the impact of their customizations on energy production and aesthetics.
   - Agents can provide expert guidance and recommendations based on user preferences, ensuring optimal system performance and satisfaction.
   - Customization settings are saved within the session, allowing users to revisit and modify their choices as needed.

6. **Visualization:**
   - Visualization tools provide users with a realistic representation of their customized solar solution on their property.
   - Users can view 3D models or augmented reality simulations to visualize how solar panels would look and function on their roof or property.
   - Simulation features allow users to see how factors such as shading, panel orientation, and weather conditions affect energy production and savings.
   - Visualizations enhance user understanding and confidence in their solar investment, leading to higher conversion rates and customer satisfaction.
   - Agents can leverage visualization tools to effectively communicate the benefits of solar energy and address user concerns.

7. **Payment:**
   - The payment feature enables users to initiate payment for their selected solar solution directly within the app.
   - Users can review pricing details, financing options, and payment terms before proceeding with payment.
   - Secure integration with payment gateways ensures safe and seamless transactions, protecting user financial information.
   - Payment confirmation notifications provide users with peace of mind and assurance that their transaction has been processed successfully.
   - Agents can monitor payment status and follow up with users as needed to ensure a smooth transition to the installation phase.

8. **Notifications:**
   - The app delivers notifications to both agents and users to provide updates, reminders, and important information throughout the solar adoption process.
   - Users receive notifications regarding session schedules, payment reminders, installation appointments, and system updates.
   - Agents receive notifications about new session requests, user responses, and important milestones in the sales process.
   - Personalized notifications enhance user engagement and communication between agents and users, fostering a positive user experience.
   - Notifications can be configured to reach users via email, push notifications, or in-app messages, ensuring timely and relevant communication.

9. **Education:**
   - Educational content is seamlessly integrated into the interaction flow, providing users with valuable information about solar energy and its benefits.
   - Educational slides cover topics such as solar technology, environmental impact, cost savings, and available incentives.
   - Agents can leverage educational content to educate users, address common misconceptions, and build trust in solar energy.
   - Interactive quizzes and tutorials engage users and reinforce key concepts, enhancing their understanding and confidence in solar adoption.
   - Education sessions can be customized based on user knowledge level and preferences, ensuring personalized and effective communication.

10. **Reporting and Analytics:**
    - The app collects and analyzes data from user sessions to provide agents and administrators with valuable insights into user behavior and preferences.
    - Reporting tools generate comprehensive reports on key metrics such as conversion rates, user engagement, and popular customization choices.
    - Analytics dashboards offer real-time visibility into sales performance, allowing agents to track progress towards targets and identify areas for improvement.
    - Data-driven decision-making enables agents to optimize their sales strategies, tailor their approach to user preferences, and maximize conversion rates.
    - Reporting and analytics features empower agents and administrators to continuously refine and enhance the solar adoption process, driving success and growth for the business.

## App Flow

1. **Authentication:**
   - Agent launches the app.
   - Agent is prompted to log in using their unique agentId.
   - Upon entering the agentId, the agent is authenticated and directed to the main dashboard.

2. **Main Dashboard:**
   - The main dashboard serves as the starting point for the agent's interaction.
   - It provides access to various features and functionalities of the app.
   - From here, the agent can initiate new sessions, access ongoing sessions, view notifications, etc.

3. **Initiating a New Session:**
   - Agent selects the option to start a new session with a potential customer.
   - The app guides the agent through introductory slides to set the context and introduce the solar adoption process.
   - Once the agent indicates that the potential customer is willing to engage, the session officially begins.

4. **Interactive Presentation:**
   - The agent presents interactive slides to the potential customer, covering topics such as solar technology, benefits, financing options, etc.
   - The presentation dynamically adapts based on the potential customer's responses and interests.
   - Throughout the presentation, the agent guides the potential customer through various choices and customization options.

5. **Customization and Visualization:**
   - The agent assists the potential customer in customizing their solar solution, such as selecting panel types, sizes, and configurations.
   - Real-time visualization tools provide the potential customer with visual representations of their customized solar solution on their property.
   - The agent explains the impact of different customizations and helps the potential customer make informed decisions.

6. **Payment Process:**
   - Once the potential customer is satisfied with their customized solar solution, the agent guides them through the payment process.
   - The potential customer reviews pricing details, financing options, and payment terms.
   - Upon confirmation, the agent initiates the payment transaction securely within the app.
   - The agent receives a payment confirmation notification upon successful processing of the transaction.

7. **Session Conclusion:**
   - After the payment is completed, the session concludes.
   - The agent may schedule an installation appointment or provide additional follow-up information to the potential customer.
   - A summary of the session, including all choices made and customizations selected, is saved for future reference.

8. **Notifications and Follow-Up:**
   - The agent receives notifications about upcoming sessions, payment reminders, installation appointments, etc.
   - The agent can follow up with potential customers as needed, addressing any questions or concerns that arise after the session.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
