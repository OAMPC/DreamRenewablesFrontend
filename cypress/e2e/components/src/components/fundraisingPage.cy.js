describe('Fundraising Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/fundraising-page*', {
      fixture: 'fundraisingPageStrapiResponse.json',
    }).as('getFundraisingPageStrapiData');

    cy.visit('/fundraising');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getFundraisingPageStrapiData');
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
