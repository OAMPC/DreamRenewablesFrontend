// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
  cy.intercept('GET', '**/api/navigation-bar*', {
    fixture: 'navigationBarStrapiResponse.json',
  }).as('getNavigationBarStrapiData');

  cy.intercept('GET', '**/api/footer*', {
    fixture: 'footerStrapiResponse.json',
  }).as('getFooterStrapiData');

  cy.intercept('GET', '**/api/blog-posts*', {
    fixture: 'blogPostsStrapiResponse.json',
  }).as('getBlogPostsStrapiData');
});
