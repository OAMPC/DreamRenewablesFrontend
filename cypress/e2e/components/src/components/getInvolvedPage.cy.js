describe('Get Involved Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

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

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
