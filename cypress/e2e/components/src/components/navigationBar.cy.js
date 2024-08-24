describe('NavigationBar', () => {
  beforeEach(() => {
    cy.intercept('GET', `http://localhost:1337/api/navigation-bar*`, {
      fixture: 'navigationBarResponse.json',
    }).as('getNavigationBarStrapiData');
    cy.visit('/');
    cy.wait('@getNavigationBarStrapiData');
  });

  it('should load navigation bar and verify all elements are present and functioning', () => {
    cy.get('[data-testid="brand-logo"]').should('be.visible');
    cy.get('[data-testid="brand-logo"] img').should('be.visible');

    cy.get('[data-testid="dropdown-link-title"]').first().click();
    cy.get('.dropdown-menu')
      .first()
      .find('a')
      .should('have.length.greaterThan', 0);

    cy.get('[data-testid="standard-link-title"]').each(($link) => {
      cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
    });

    cy.get('[data-testid="navigation-button"]').click();
    cy.url().should('include', '/donate');
  });
});
