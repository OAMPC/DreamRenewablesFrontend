describe('Donate Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/donate-page*', {
      fixture: 'donatePageStrapiResponse.json',
    }).as('donatePageStrapiData');

    cy.visit('/donate');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkSubPagesStrapiData');
    cy.wait('@getBlogPostsStrapiData');
    cy.wait('@donatePageStrapiData');
  });

  it('should load the donate page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-card-desktop"]').should('be.visible');
    cy.get('[data-testid="donate-page-pre-metric-text"]').should('be.visible');
    cy.get('[data-testid="stat-template-page-metric"]').should(
      'have.length',
      2
    );
    cy.get('[data-testid="donate-page-post-metric-text"]').should('be.visible');
    cy.get('[data-testid="donate-page-payment-section"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
