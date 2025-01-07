describe('About Us Page', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/navigation-bar*', {
      fixture: 'navigationBarStrapiResponse.json',
    }).as('getNavigationBarStrapiData');

    cy.intercept('GET', '**/api/footer*', {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');

    cy.intercept('GET', '**/api/about-us-page*', {
      fixture: 'aboutUsPageStrapiResponse.json',
    }).as('aboutUsPageStrapiData');

    cy.visit('/about-us');

    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@aboutUsPageStrapiData');
  });

  it('should load the about us page and verify all elements are present and functioning', () => {
    cy.get('[data-testid="navbar"]').should('be.visible');

    cy.get('[data-testid="about-us-landing-card-desktop"]').should(
      'be.visible'
    );
    cy.get('[data-testid="about-us-page-section-title"]').should(
      'have.length',
      3
    );
    cy.get('[data-testid="about-us-page-image-button"]').should(
      'have.length',
      2
    );

    cy.get('[data-testid="footer"]').should('be.visible');
  });
});
