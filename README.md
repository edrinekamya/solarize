# solarize

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
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
