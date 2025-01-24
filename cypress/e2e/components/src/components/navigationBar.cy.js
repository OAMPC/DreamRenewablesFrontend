describe('NavigationBar', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/landing-page*', {
      fixture: 'landingPageStrapiResponse.json',
    }).as('getLandingPageStrapiData');

    cy.visit('/');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkSubPagesStrapiData');
    cy.wait('@getBlogPostsStrapiData');
    cy.wait('@getLandingPageStrapiData');
  });

  it('should load navigation bar and verify all elements are present and functioning', () => {
    cy.get('[data-testid="brand-logo"]').should('be.visible');
    cy.get('[data-testid="brand-logo"] img').should('be.visible');

    cy.get('[data-testid="standard-link-title"]').each(($link) => {
      cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
    });

    cy.get('[data-testid="navigation-button"]').click();
    cy.url().should('include', '/donate');
  });
});
