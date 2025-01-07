describe('Our Work Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

    cy.intercept('GET', '**/api/our-work-page*', {
      fixture: 'ourWorkPageStrapiResponse.json',
    }).as('getOurWorkPageStrapiData');

    cy.visit('/our-work');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkPageStrapiData');
  });

  it('should load the our team page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-card-desktop"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
