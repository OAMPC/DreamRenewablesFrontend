describe('Footer', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/landing-page*', {
      fixture: 'landingPageStrapiResponse.json',
    }).as('getLandingPageStrapiData');

    cy.visit('/');
    cy.wait('@getNavigationBarStrapiData');
    cy.wait('@getFooterStrapiData');
    cy.wait('@getOurWorkSubPagesStrapiData');
    cy.wait('@getLandingPageStrapiData');
  });

  it('should load footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="footer"]').should('be.visible');

    cy.get('.footer-image-caption').should('be.visible');

    cy.get('[data-testid="footer-body"]').should('be.visible');

    cy.get('[data-testid="navigation-links-title"]').should('be.visible');
    cy.get('[data-testid="footer-navigation-col"] a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href').and('not.be.empty');
    });

    cy.get('[data-testid="social-media-links-title"]').should('be.visible');

    cy.get('[data-testid="contact-information-title"]').should('be.visible');
    cy.get('[data-testid="footer"] h4').invoke('text').should('not.be.empty');
    cy.get('[data-testid="footer"] p').invoke('text').should('not.be.empty');
  });
});
