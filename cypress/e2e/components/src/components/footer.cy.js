describe('Footer', () => {
  beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('VITE_BASE_URL')}/api/footer*`, {
      fixture: 'footerStrapiResponse.json',
    }).as('getFooterStrapiData');
    cy.visit('/');
    cy.wait('@getFooterStrapiData');
  });

  it('should load footer and verify all elements are present and functioning', () => {
    cy.get('[data-testid="footer"]').should('be.visible');

    cy.get('[data-testid="footer-image"]').should('be.visible');
    cy.get('[data-testid="footer-image"]')
      .should('have.attr', 'src')
      .and('not.be.empty');

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
