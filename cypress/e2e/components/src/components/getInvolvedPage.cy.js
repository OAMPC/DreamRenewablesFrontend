describe('Get Involved Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/get-involved-page*', {
      fixture: 'getInvolvedPageStrapiResponse.json',
    }).as('getInvolvedPageStrapiData');

    cy.visit('/get-involved');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getInvolvedPageStrapiData');
  });

  it('should load the get involved page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-card-desktop"]').should('be.visible');
    cy.get('[data-testid="get-involved-page-section-title"]').should(
      'have.length',
      4
    );
    cy.get('[data-testid="payment-section"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
