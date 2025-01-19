describe('Stat Template Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

    cy.intercept('GET', '**/api/our-work-sub-pages/*', {
      fixture: 'statTemplatePageStrapiResponse.json',
    }).as('getOurWorkSubPageStrapiData');

    cy.visit('/our-work/training-and-advocacy');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkSubPageStrapiData');
  });

  it('should load a template stat page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="landing-card-desktop"]').should('be.visible');
    cy.get('[data-testid="stat-template-page-quote-section"]').should(
      'be.visible'
    );
    cy.get('[data-testid="stat-template-page-metric"]').should(
      'have.length',
      2
    );
    cy.get('[data-testid="stat-template-page-free-text"]').should('be.visible');

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
