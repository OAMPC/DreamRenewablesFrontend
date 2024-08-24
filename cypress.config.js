import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:5173',
    env: {
      VITE_BASE_URL: 'http://localhost:1337',
    },
    fixturesFolder: './fixtures',
  },
});
