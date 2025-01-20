describe('Our Team Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/our-team-page*', {
      fixture: 'ourTeamPageStrapiResponse.json',
    }).as('getOurTeamPageStrapiData');

    cy.visit('/our-team');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkSubPagesStrapiData');
    cy.wait('@getBlogPostsStrapiData');
    cy.wait('@getOurTeamPageStrapiData');
  });

  it('should load the our team page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="our-team-page-title"]').should('be.visible');
    cy.get('[data-testid="department-section"]').should('have.length', 2);

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
