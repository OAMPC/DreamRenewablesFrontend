import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    env: {
      VITE_BASE_URL: 'http://localhost:1337', // Define your custom env variable here
    },
    fixturesFolder: './fixtures',
  },
});
