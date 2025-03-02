describe('Our Work Sub Page', () => {
  beforeEach(() => {
    cy.visit('/our-work/training-and-advocacy');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getBlogPostsStrapiData');
    cy.wait('@getOurWorkSubPagesStrapiData');
  });

  it('should load a Our Work Sub page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-card-desktop"]').should('be.visible');
    cy.get('[data-testid="stat-template-page-quote-section"]').should(
      'be.visible'
    );
    cy.get('[data-testid="metric"]').should('have.length', 4);
    cy.get('[data-testid="stat-template-page-free-text"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
