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

    cy.get('[data-testid="donate-page-title"]').should('be.visible');
  });
});
