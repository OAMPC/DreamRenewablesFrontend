describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/landing-page*', {
      fixture: 'landingPageStrapiResponse.json',
    }).as('getLandingPageStrapiData');

    cy.visit('/');
    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getLandingPageStrapiData');
  });

  it('should load the landing page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-page-card-desktop"]').should('be.visible');
    cy.get('[data-testid="landing-video-section"]').should('be.visible');
    cy.get('[data-testid="landing-speciality-section"]').should('be.visible');
    cy.get('[data-testid="landing-quote-section"]').should('be.visible');
    cy.get('[data-testid="payment-section"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
